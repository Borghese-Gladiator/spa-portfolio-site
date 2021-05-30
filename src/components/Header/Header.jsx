import styled from 'styled-components';
import PropTypes from "prop-types";
import { BiSun, BiMoon } from 'react-icons/bi';
import { HiOutlineTranslate } from 'react-icons/hi';

const IconButton = styled.button`
  color: inherit; /* ensure button inherits theme color */
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: perspective(1px) translateZ(0);
  transition-property: color;
  transition-duration: 0.3s;
  
  &:hover {
    transform: scale(1.2);
  }
`

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

const ToggleLanguageDropdown = ({ lang, setLang }) => {
  return (
    <IconButton>
      <HiOutlineTranslate style={{fontSize: 30}} />
    </IconButton>
  )
}
ToggleLanguageDropdown.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
}

const StyledHeader = styled.div`
  display: flex;
  background: ${({ theme }) => theme.headerColor};
  border-color: 2px solid ${({ theme }) => theme.headerColor};
`;
const FlexGrow = styled.div`
  flex: 1
`
const StyledList = styled.div`
  display: flex;
  align-items: center;
  /* Remove ul styling */
  list-style-type: none;
  margin: 0;
  padding: 0;
  > li {
    margin: 5px;
  }
`
const Header = ({ theme, toggleTheme, lang, setLang }) => {
  return (
    <StyledHeader>
      <FlexGrow />
      <StyledList>
        <li><ToggleDarkMode theme={theme} toggleTheme={toggleTheme} /></li>
        <li><ToggleLanguageDropdown lang={lang} setLang={setLang} /></li>
      </StyledList>
    </StyledHeader>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Header;