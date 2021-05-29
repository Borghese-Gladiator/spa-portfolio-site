import { ThemeProvider, createGlobalStyle } from "styled-components";
// custom hooks
import useDarkMode from "../../hooks/useDarkMode"
// custom navbar component (has toggle)
import Navbar from '../Navbar';
// CSS constants
import { lightTheme, darkTheme } from "./Themes"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          {children}        
        </main>
      </>
    </ThemeProvider>
  );
};

export default Layout;