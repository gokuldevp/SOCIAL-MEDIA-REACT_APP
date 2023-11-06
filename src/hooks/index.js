import { useContext, useState } from "react"; // Import the useContext, useState hook from React.
import { login as userLogin } from "../api"; // Import the login function from the '../api' module.
import { AuthContext } from "../providers/AuthProvider"; // Import the AuthContext from the '../providers/AuthProvider' module.
import { setItemInLocalStorage, removeItemFromLocalStorage, LOCALSTORAGE_TOKEN_KEY } from "../utils";

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

  // Function to handle user ;ogin with email and password.
  const login = async (email, password) => {
    // Implement the login functionality here.
    // This function should authenticate the user and update the 'user' state accordingly.

    const response = await userLogin(email, password);

    if (response.success){
      setUser(response.data.user);
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success:true
      }
    } else {
      return {
        success:false,
        message: response.message
      }
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
    loading   // A loading indicator to track the authentication process.
  };
};
