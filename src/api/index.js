// Import the API_URLS, LOCALSTORAGE_TOKEN_KEY from the "../utils" module.
import { API_URLS,LOCALSTORAGE_TOKEN_KEY } from "../utils";

// Define a customFetch function to make API requests with optional authentication.
const customFetch = async (url, { body, ...customConfig }) => {
    // Retrieve the user's authentication token from localStorage.
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    // Define the default headers for the HTTP request.
    const headers = {
        'content-type': 'application/json',
        Accept: 'application/json'
    };

    // If a user token is available, add it to the headers for authentication.
    if (token) {
        headers.Authentication = `Bearer ${token}`;
    }

    // Merge the custom headers with the default headers.
    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }

    // If a request body is provided, convert it to JSON format.
    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        // Send the HTTP request using fetch and await the response.
        const response = await fetch(url, config);
        // Parse the response as JSON.
        const data = await response.json();

        // Check if the API request was successful.
        if (data.success) {
            return {
                data: data.data,
                success: true
            }
        }

        // If the API request was not successful, throw an error with the received message.
        throw new Error(data.message);

    } catch (error) {
        // Log any errors that occur during the request and return an error response.
        console.error("Error:", error);
        return {
            message: error.message,
            success: false
        };
    }
}

/**
 * Fetches a list of posts from the API using the customFetch function.
 *
 * @param {number} page - The page number of posts to retrieve (default is 1).
 * @param {number} limit - The maximum number of posts to retrieve (default is 5).
 * @returns {Promise} A Promise that resolves to the API response or an error object.
 */
export const getPosts = (page = 1, limit = 5) => {
    // Use the customFetch function to send a GET request to the specified API endpoint.
    return customFetch(API_URLS.posts(page, limit), {
        METHOD: "GET"
    });
}


/**
 * Logs in a user by sending a POST request to the login API endpoint.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 *
 * @returns {Promise} A promise that resolves with the response from the login request.
 */
export const login = (email, password) => {
    return customFetch(API_URLS.login(), {
      method: 'POST',
      body: { email, password },
    });
  };
  