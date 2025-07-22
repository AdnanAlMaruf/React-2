
import styles from "./Nav.module.css";
console.log(styles);

const Nav = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <div className='logo'>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
