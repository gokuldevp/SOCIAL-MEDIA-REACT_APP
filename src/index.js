// Importing necessary dependencies from React and ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the CSS for styling.
import './styles/index.css';

// Importing the main application component 'App' from the 'components' directory.
import { App } from './components';

// Importing the 'AuthProvider' component from the 'providers' directory for managing authentication.
import { AuthProvider } from './providers/AuthProvider';

// Rendering the application to the root element in the HTML document.
ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping the entire application with 'AuthProvider' for authentication context. */}
    <AuthProvider>
      {/* Rendering the main 'App' component within 'AuthProvider'. */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root') // Mounting the application to the 'root' element in the HTML document.
);

