// Import necessary modules and components.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "../pages";
import { Loader, Navbar } from ".";
import { useAuth } from "../hooks";

const ErrorPage = () => {
  return(
    <h1>
      404
    </h1>
  )
}

function App() {
  const auth = useAuth()

  // If the data is still loading, render a 'Loader' component.
  if (auth.loading) {
    return <Loader />;
  }

  // Render the main content of the application, including the 'Home' and 'Login' components.
  return (
    <div className="App">
      <Router>
      <Navbar /> {/* Display the Navbar component */}
        <Routes>
          <Route path="/" element={<Home posts={[]} />} /> {/* Render Home component with posts */}
          <Route path="/login" element={<Login />} /> {/* Render Login component */}
          <Route path="/signup" element={<Signup />} /> {/* Render Login component */}
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
