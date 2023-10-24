import styles from '../styles/navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/"> {/* to is user insted of href */}
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </Link>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.user}>
          <Link to="/">
            <img
              src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678130-profile-alt-4-512.png"
              alt=""
              className={styles.userDp}
            />
          </Link>
          <span>Gokul</span>
        </div>

        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
