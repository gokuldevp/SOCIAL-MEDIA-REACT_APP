// Importing the createContext function from React to create an authentication context.
import { createContext } from 'react';

// Importing a custom hook called useProvideAuth from the 'hooks' module.
import { useProvideAuth } from '../hooks';

// Initial state for the authentication context.
const initialState = {
  user: null,     // The user is initially set to null (not authenticated).
  login: () => {}, // Placeholder function for login.
  logout: () => {}, // Placeholder function for logout.
  loading: true,  // Loading state is initially set to true.
  signup: () => {}
};

// Creating an AuthContext using createContext with the initial state.
export const AuthContext = createContext(initialState);

// Creating an AuthProvider component that wraps its children with the AuthContext.
export const AuthProvider = ({ children }) => {
  // Using the custom 'useProvideAuth' hook to obtain authentication-related functions and data.
  const auth = useProvideAuth();

  // Providing the authentication context value to its children.
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
