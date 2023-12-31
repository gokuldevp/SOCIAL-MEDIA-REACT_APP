import { useContext, useState, useEffect } from "react"; // Import the useContext, useState hook from React.
import { login as userLogin, register } from "../api"; // Import the login function from the '../api' module.
import { AuthContext } from "../providers/AuthProvider"; // Import the AuthContext from the '../providers/AuthProvider' module.
import { setItemInLocalStorage, removeItemFromLocalStorage, LOCALSTORAGE_TOKEN_KEY, getItemFromLocalStorage } from "../utils";
import { jwtDecode } from "jwt-decode";

/**
 * A custom hook that provides access to the authentication context.
 * It allows components to access and modify the user's authentication state.
 *
 * @returns {object} The authentication context.
 */
export const useAuth = () => {
  return useContext(AuthContext); // Return the authentication context using the useContext hook.
}


// Custom hook for providing authentication-related functions and data.
export const useProvideAuth = () => {
  // Initializing state variables for user and loading state.
  const [user, setUser] = useState(null); // Initially, the user is set to null.
  const [loading, setLoading] = useState(true); // Initially, the loading state is set to true.

  useEffect(() => {
    // Retrieve the user's token from local storage.
    const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  
    if (userToken) {
      // If a token exists in local storage, decode it using JWT.
      const user = jwtDecode(userToken);
  
      // Set the user state with the decoded user object.
      setUser(user);
    }
  
    // Set the loading state to false to indicate that the component has finished its initial work.
    setLoading(false);
  }, []);
  

  // Function to handle user login with email and password.
  const login = async (email, password) => {
  // Implement the login functionality here.

  // Call the 'userLogin' function to authenticate the user.
  const response = await userLogin(email, password);

  if (response.success) {
    // If authentication is successful, update the 'user' state.
    setUser(response.data.user);

    // Store the user's token in the local storage.
    setItemInLocalStorage(
      LOCALSTORAGE_TOKEN_KEY,
      response.data.token ? response.data.token : null
    );

    // Return a success object with a success flag.
    return {
      success: true
    };
  } else {
    // If authentication fails, return an object with a success flag and an error message.
    return {
      success: false,
      message: response.message
    };
  }
  };

  // signup function handles user registration
  const signup = async (name, email, password, confirmPassword) => {
  // Send a request to the 'register' API endpoint with user information
  const response = await register(name, email, password, confirmPassword);

  // Check if the registration was successful
  if (response.success) {
    // If successful, return a success response
    return {
      success: true,
    };
  } else {
    // If there's an error, return a failure response with an error message
    return {
      success: false,
      message: response.message,
    };
  }
 };


  // Function to handle user logout.
  const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  // Returning an object with user data, userLogin, logout functions, and loading state.
  return {
    user,     // The current authenticated user (or null if not authenticated).
    login,    // The function for user userLogin.
    logout,   // The function for user logout.
    loading,   // A loading indicator to track the authentication process.
    signup
  };
};
