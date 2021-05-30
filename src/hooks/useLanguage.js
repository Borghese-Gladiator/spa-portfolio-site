import { useEffect, useState } from 'react';

const useLanguage = () => {
  const defaultLang = window.navigator.userLanguage || window.navigator.language;
  const [lang, setLang] = useState(defaultLang);

  const setLangMode = mode => {
    window.localStorage.setItem('lang', mode)
    setLang(mode)
  };

  useEffect(() => {
    const localLang = window.localStorage.getItem('lang');
    localLang ? setLang(localLang) : setLangMode('light')
  }, []);

  return [lang, setLangMode]
};

export default useLanguage;