import { useEffect, useState } from 'react';

const useLanguage = () => {
  const defaultLang = (window.navigator.userLanguage || window.navigator.language).slice(0, 2);
  const [lang, setLang] = useState(defaultLang);

  const setLangMode = mode => {
    window.localStorage.setItem('lang', mode)
    setLang(mode)
  };

  useEffect(() => {
    const localLang = window.localStorage.getItem('lang');
    localLang ? setLang(localLang) : setLangMode('en');
  }, []);

  return [lang, setLangMode]
};

export default useLanguage;