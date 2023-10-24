# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


========================================================================================

# Social Media App
* Step 1: Initial setup
1. create a react project `npx create-react-app <app-name>`
2. Setup the folders such as api, components, pages, providers, styles, utils
3. Remove all the unnecessay files and folders

* Step 2: Setup the API
1. Add the api detail in the utils/index.js file
2. Create function (customFetch) to handle the api in api.index.js file

* Step 3: Adding Home Page and styling it
1. Create a Home.js file in pages folder
2. Creaate Loader component in the components folder
3. style the home page uing home.module.css

* Step 4: Porps validation
1. install the prop-types package `npm i prop-types`
2. using the propTypes from prop-types package create a propery to validate the props type in home.js

* Step 5: Adding Navbar
1. Create a Navbar component in the Navbar.js
2. use the navbar component in the App.js file

* Step 6: Create Comment component
1. Create a new comment component

## Routing and Auth
* Step 1: Install `npm i react-router-dom` [doc](https://reactrouter.com/en/main)
* Step 2: import BrowserRouter as Router, Routes, Route from react-router-dom
```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```
* Step 3: User the Router in the jsx
```js
  // Render the main content of the application, including the 'Home' and 'Login' components.
  return (
    <div className="App">
      <Navbar /> {/* Display the Navbar component */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} /> {/* Render Home component with posts */}
          <Route exact path="/login" element={<Login />} /> {/* Render Login component */}
        </Routes>
      </Router>
    </div>
  );
}
```