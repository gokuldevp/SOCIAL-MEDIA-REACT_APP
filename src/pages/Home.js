import styles from '../styles/home.module.css';
import propTypes from "prop-types"
import { Comment } from '../components';


const Home = ({posts}) => {
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
