import { useEffect } from "react";
import { getPosts } from "../api";

function App() {
  useEffect(() => {
    // Define an asynchronous function to fetch posts from the API.
    const fetchPosts = async () => {
      // Call the getPosts function to fetch posts and await the response.
      const response = await getPosts();
      console.log("response", response);
    }

    // Call the fetchPosts function when the component mounts (empty dependency array).
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
