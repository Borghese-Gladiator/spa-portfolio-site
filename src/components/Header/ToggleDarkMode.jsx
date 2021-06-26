import { BiSun, BiMoon } from 'react-icons/bi';
import IconButton from './IconButton';
import PropTypes from "prop-types";

const ToggleDarkMode = ({ theme, toggleTheme }) => {
  return (
    <IconButton onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}>
      {
        theme === "dark"
        ? <BiSun style={{fontSize: 30}} />
        : <BiMoon style={{fontSize: 30}} />
      }
    </IconButton>
  )
}

ToggleDarkMode.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default ToggleDarkMode;