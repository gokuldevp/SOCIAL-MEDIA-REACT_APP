import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks'; // Importing custom hook
import styles from '../styles/login.module.css'; // Importing CSS modules

const Signup = () => {
  // Define state variables using the useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingUp, setSigningUp] = useState('');

  // Access the auth object and history object using custom hooks
  const auth = useAuth();
  const navigate = useNavigate();

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    let error = false;

    // Validation: Check if all required fields are filled
    if (!name || !email || !password || !confirmPassword) {
      console.log('Please fill all the fields', {
        appearance: 'error',
        autoDismiss: true,
      });
      error = true;
    }

    // Validation: Check if the password and confirm password match
    if (password !== confirmPassword) {
      console.log('Make sure password and confirm password matches', {
        appearance: 'error',
        autoDismiss: true,
      });

      error = true;
    }

    // If there are validation errors, return early and setSigningUp to false
    if (error) {
      return setSigningUp(false);
    }

    // Attempt user registration using the auth.signup function
    const response = await auth.signup(name, email, password, confirmPassword);

    if (response.success) {
      // If registration is successful, redirect to the login page and display a success toast
      navigate('/login');
      setSigningUp(false);

      return console.log('User registered successfully, please login now', {
        appearance: 'success',
        autoDismiss: true,
      });
    } else {
      // If there's an error during registration, display an error toast
      console.log(response.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }

    // Set signingUp to false to enable the form submission button
    setSigningUp(false);
  };

  // Render the signup form
  return (
    <form className={styles.loginForm} onSubmit={handleFormSubmit}>
      <span className={styles.loginSignupHeader}> Signup</span>
      <div className={styles.field}>
        <input
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Confirm password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <button disabled={signingUp}>
          {signingUp ? 'Signing up...' : 'Signup'}
        </button>
      </div>
    </form>
  );
};

export default Signup;
