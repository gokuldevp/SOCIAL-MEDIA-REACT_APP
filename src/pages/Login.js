// Importing React's useState hook for managing component state.
import { useState } from 'react';

// Importing the CSS styles for the login component.
import styles from '../styles/login.module.css';

// Importing the login function from the API module.
import { login } from '../api';

import { useAuth } from '../hooks';

// The Login functional component.
const Login = () => {
  // Setting up state variables using the useState hook.
  const [email, setEmail] = useState(''); // Initialize 'email' state with an empty string.
  const [password, setPassword] = useState(''); // Initialize 'password' state with an empty string.
  const [loggingIn, setLoggingIn] = useState(false); // Initialize 'loggingIn' state with 'false'.
  
  const auth = useAuth(); // Get the authentication context using the 'useAuth' hook.
  
  /**
   * Handles the form submission and login process.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    setLoggingIn(true); // Set 'loggingIn' state to 'true' to indicate a login attempt.
  
    const response = await auth.login(email, password); // Attempt to log in using the provided email and password.
  
    setLoggingIn(false); // Set 'loggingIn' state back to 'false' after the login attempt is completed.
  };
  

  // Rendering the login form.
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        {/* Input field for the user's email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        {/* Input field for the user's password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        {/* Submit button that is disabled when logging in */}
        <button disabled={loggingIn}>
          {loggingIn ? 'Logging in...' : 'Log In'}
        </button>
      </div>
    </form>
  );
};

// Exporting the Login component.
export default Login;
