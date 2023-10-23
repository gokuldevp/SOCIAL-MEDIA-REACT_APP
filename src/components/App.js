import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Home } from "../pages";
import { Loader, Navbar } from "."

function App() {
  // Initialize state variables to manage posts and loading status.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use the useEffect hook to fetch posts from the API when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch posts from the API.
    const fetchPosts = async () => {
      // Call the getPosts function to fetch posts and await the response.
      const response = await getPosts();

      // Check if the API request was successful.
      if (response.success) {
        // Update the 'posts' state with the data received from the API.
        setPosts(response.data.posts);
      }

      // Set 'loading' to 'false' once the data is fetched or in case of an error.
      setLoading(false);
    }

    // Call the fetchPosts function when the component mounts (empty dependency array).
    fetchPosts();
  }, []);

  // If the data is still loading, render a 'Loader' component.
  if (loading) {
    return <Loader />;
  }

  // Render the main content of the application, including the 'Home' component.
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello world</h1>
      <Home posts={posts} />
    </div>
  );
}

export default App;
