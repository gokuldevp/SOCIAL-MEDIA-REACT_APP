// Importing React's useState hook for managing component state.
import { useState } from 'react';

// Importing the CSS styles for the login component.
import styles from '../styles/login.module.css';

// Importing the login function from the API module.
import { login } from '../api';

// The Login functional component.
const Login = () => {
  // Setting up state variables using the useState hook.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  // Handling form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    // Sending a login request to the API using the imported 'login' function.
    const response = await login(email, password);

    setLoggingIn(false);
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
