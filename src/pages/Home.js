import styles from '../styles/home.module.css';
import propTypes from "prop-types"
import { Comment } from '../components';
import { useEffect, useState } from 'react';
import { getPosts, setPosts, setLoading } from '../api';
import Loader from '../components';


const Home = () => {
  // Initialize state variables to manage posts and loading status.
  const [posts, setPosts] = useState([]); // State for storing posts
  const [loading, setLoading] = useState(true); // State for loading status
  
  useEffect(() => {
    // This effect runs when the component mounts (due to the empty dependency array `[]`).
    const fetchPosts = async () => {
      const response = await getPosts(); // Assuming getPosts is an asynchronous function that fetches posts.
  
      if (response.success) {
        // If the response is successful, update the 'posts' state with the fetched posts.
        setPosts(response.data.posts);
      }
  
      // Set 'loading' to false regardless of the result of the API call.
      setLoading(false);
    };
  
    // Call the 'fetchPosts' function to fetch posts when the component mounts.
    fetchPosts();
  }, []);
  
  if (loading) {
    // If 'loading' is true, display a loading spinner (assuming the 'Loader' component is defined elsewhere).
    return <Loader />;
  }
  

  return (
    <div className={styles.postsList}>
      {posts.map((post) => (

      <div className={styles.postWrapper} key={post._id}>
      <div className={styles.postHeader}>
        <div className={styles.postAvatar}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678130-profile-alt-4-512.png"
            alt="user-pic"
          />
          <div>
            <span className={styles.postAuthor}>{post.user.name}</span>
            <span className={styles.postTime}>a minute ago</span>
          </div>
        </div>
        <div className={styles.postContent}>{post.content}</div>

        <div className={styles.postActions}>
          <div className={styles.postLike}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/set-1/32/__1-512.png"
              alt="likes-icon"
            />
            <span>5</span>
          </div>

          <div className={styles.postCommentsIcon}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/comment-text-512.png"
              alt="comments-icon"
            />
            <span>2</span>
          </div>
        </div>
        <div className={styles.postCommentBox}>
          <input placeholder="Start typing a comment" />
        </div>

        <div className={styles.postCommentsList}>
          <Comment/>
        </div>
      </div>
    </div>
    
    ))}

    </div>
  );
};

Home.propTypes = {
  posts: propTypes.array.isRequired,
}

export default Home;
