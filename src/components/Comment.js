import styles from '../styles/home.module.css';
import propTypes from "prop-types"

const Comment = ({comment}) => {
    return (
        <div className={styles.postCommentsItem}>
        <div className={styles.postCommentHeader}>
          <span className={styles.postCommentAuthor}>Bill</span>
          <span className={styles.postCommentTime}>a minute ago</span>
          <span className={styles.postCommentLikes}>22</span>
        </div>

        <div className={styles.postCommentContent}>Random comment</div>
        </div>
    )
}

Comment.propTypes = {
    comment: propTypes.array.isRequired,
}

export default Comment;