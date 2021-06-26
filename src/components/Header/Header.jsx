import styled from 'styled-components';
import PropTypes from "prop-types";
//
import ToggleDarkMode from './ToggleDarkMode';
import ToggleLangDropdown from './ToggleLangDropdown';

const StyledHeader = styled.div`
  display: flex;
  background: ${({ theme }) => theme.headerColor};
  border: 2px solid ${({ theme }) => theme.headerColor};
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
      <h1>TIMOTHY SHEE</h1>
      <FlexGrow />
      <StyledList>
        <li><ToggleDarkMode theme={theme} toggleTheme={toggleTheme} /></li>
        <li><ToggleLangDropdown lang={lang} setLang={setLang} /></li>
      </StyledList>
    </StyledHeader>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Header;