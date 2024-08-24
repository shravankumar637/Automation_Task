import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';
import { utility } from '../../utils/utility';


// Load test data and headers before the test suite runs
let testData: any;
const headers = utility.getHeaders();
/**
 * This test suite contains tests for interacting with the User API using the `UserAPI` class.
 * It covers CRUD operations including getting all users, creating a new user, updating an existing user, and deleting a user.
 */
test.describe('User API Tests', () => {
  let userAPI: UserAPI;
  let userId: number;
  let testData: any;

  test.beforeAll(async () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Disable SSL verification
    testData = await utility.getTestData('backendData.xml');
  
  });

  /**
   * Initializes the `UserAPI` class before each test, using Playwright's `request` object to set up the API context.
   * The context is configured to ignore HTTPS errors.
   */
  test.beforeEach(async ({ playwright }) => {
    const requestContext = await playwright.request.newContext({
      ignoreHTTPSErrors: true,
    });
    userAPI = new UserAPI(requestContext);
  });

  /**
   * Test to verify the retrieval of all users.
   * - Sends a `GET` request to fetch all users.
   * - Asserts that the response is successful and the status code is 200.
   */
  test('GET All Users', async () => {
    const response = await userAPI.getAllUsers();
    const responseBody = await response.json();
    console.log('GET All Users Response:', responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  /**
   * Test to create a new user.
   * - Sends a `POST` request with the new user's data.
   * - Stores the `userId` from the response for later use.
   * - Asserts that the response is successful, the status code is 201, and the response body matches the provided user data.
   */
  test('POST Create New User', async () => {
    const newUser = {
      name: testData.testData.createUser[0].createUserName[0],
      job: testData.testData.createUser[0].createUserJob[0],
    };
  
    const response = await userAPI.createUser(newUser, headers);
    const responseBody = await response.json();
    console.log('Created User Response:', responseBody);
    userId = responseBody.id;
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe(newUser.name);
    expect(responseBody.job).toBe(newUser.job);
  });
  

  /**
   * Test to update an existing user.
   * - Sends a `PUT` request with the updated user data, using the `userId` from the previous test.
   * - Asserts that the response is successful, the status code is 200, and the response body matches the updated user data.
   */
  test('PUT Update User', async () => {
    const updatedUser = {
      name: testData.testData.updateUser[0].updateUserName[0],
      job: testData.testData.updateUser[0].updateUserJob[0],
    };

    const response = await userAPI.updateUser(userId, updatedUser, headers);
    const responseBody = await response.json();
    console.log('Updated Users Response:', responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe(updatedUser.name);
    expect(responseBody.job).toBe(updatedUser.job);
  });

  /**
   * Test to delete an existing user.
   * - Sends a `DELETE` request using the `userId` from the previous tests.
   * - Asserts that the response status code is 204, indicating successful deletion.
   */
  test('DELETE User', async () => {
    const response = await userAPI.deleteUser(userId);
    expect(response.status()).toBe(204);
  });
});
