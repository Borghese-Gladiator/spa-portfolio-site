import styles from './Navbar.module.css';
import PropTypes from "prop-types";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
      />{' '}Dark mode</label>
  )
}
Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grow} />
      <ul className={styles.navbar}>
        <li><a href="#top">Top</a></li>
        <li><a href="#bottom">Bottom</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://dev.to/" >Blog</a></li>
      </ul>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Navbar;