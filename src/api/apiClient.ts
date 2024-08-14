/**
 * ApiClient class provides a set of static methods and properties to construct API endpoints for the ReqRes API.
 * It contains a base URL and various endpoints for user-related operations.
 */
export class ApiClient {
  
  // Base URL for the ReqRes API
  static baseUrl = 'https://reqres.in/api';

  /**
   * Endpoints for user-related API operations.
   */
  static endpoints = {
    
    /**
     * Constructs the URL to retrieve the list of users.
     * @returns The URL string for fetching users.
     */
    getUsers: () => `${ApiClient.baseUrl}/users/`,
     
    /**
     * The URL for creating a new user.
     * @returns The URL string for creating a user.
     */
    createUser: `${ApiClient.baseUrl}/users`,

    /**
     * Constructs the URL to update a specific user by ID.
     * @param userId - The ID of the user to update.
     * @returns The URL string for updating the user with the specified ID.
     */
    updateUser: (userId: number) => `${ApiClient.baseUrl}/users/${userId}`,

    /**
     * Constructs the URL to delete a specific user by ID.
     * @param userId - The ID of the user to delete.
     * @returns The URL string for deleting the user with the specified ID.
     */
    deleteUser: (userId: number) => `${ApiClient.baseUrl}/users/${userId}`,
  };
}
