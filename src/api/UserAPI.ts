import { APIRequestContext } from '@playwright/test';
import { ApiClient } from './apiClient';

/**
 * UserAPI class provides methods for interacting with the user-related endpoints
 * of the ReqRes API using Playwright's APIRequestContext.
 */
export class UserAPI {
  private request: APIRequestContext;

  /**
   * Constructor to initialize the UserAPI class.
   * @param request - An instance of Playwright's APIRequestContext used to make HTTP requests.
   */
  constructor(request: APIRequestContext) {
    this.request = request;
  }


  /**
   * Fetches all users from the API.
   * @returns A Promise that resolves to the response object containing the list of users.
   */
  async getAllUsers() {
    const response = await this.request.get(ApiClient.endpoints.getUsers());
    return response;
  }

  /**
   * Creates a new user by sending a POST request to the API.
   * @param userData - An object containing the data for the new user.
   * @param headers - An object representing the HTTP headers to be included in the request.
   * @returns A Promise that resolves to the response object from the API.
   */
  async createUser(userData: object, headers: { [key: string]: string }) {
    const response = await this.request.post(ApiClient.endpoints.createUser, {
      data: userData,
      headers: headers,
    });
    return response;
  }


  /**
   * Updates an existing user by sending a PUT request to the API.
   * @param userId - The ID of the user to be updated.
   * @param userData - An object containing the updated data for the user.
   * @param headers - An object representing the HTTP headers to be included in the request.
   * @returns A Promise that resolves to the response object from the API.
   */
  async updateUser(userId: number, userData: object,  headers: { [key: string]: string }) {
    const response = await this.request.put(ApiClient.endpoints.updateUser(userId), {
      data: userData,
      headers: headers,
    });
    return response;
  }

  /**
   * Deletes an existing user by sending a DELETE request to the API.
   * @param userId - The ID of the user to be deleted.
   * @returns A Promise that resolves to the response object from the API.
   */
  async deleteUser(userId: number) {
    const response = await this.request.delete(ApiClient.endpoints.deleteUser(userId));
    return response;
  }
}
