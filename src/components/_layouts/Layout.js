import { ThemeProvider, createGlobalStyle } from "styled-components";
// custom hooks
import useDarkMode from '../../hooks/useDarkMode'
import useLanguage from '../../hooks/useLanguage';
// custom components
import Navbar from '../Navbar'; // contains theme toggle
import LoadingPage from '../LoadingPage';
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
  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const [lang, setLang] = useLanguage();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <LoadingPage />

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Navbar theme={theme} toggleTheme={toggleTheme} lang={lang} setLang={setLang} />
        <main>
          {children}        
        </main>
      </>
    </ThemeProvider>
  );
};

export default Layout;