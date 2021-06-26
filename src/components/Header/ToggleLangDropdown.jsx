// View Language Codes here - https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

import { useState } from 'react';
import IconButton from './IconButton';
import { HiOutlineTranslate } from 'react-icons/hi';
import PropTypes from "prop-types";

const ToggleLangDropdown = ({ lang, setLang }) => {
  console.log(lang);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const changeToEN = () => setLang("en");
  const changeToES = () => setLang("es");
  const changeToCN = () => setLang("zh");
  const changeToJP = () => setLang("ja");

  return (
    <div>
      <div className={`dropdown is-right ${isOpen ? "is-active" : ""}`} onMouseEnter={open} onMouseLeave={close}>
        <div className="dropdown-trigger">
          <IconButton aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggle}>
            <HiOutlineTranslate style={{fontSize: 30}} />
          </IconButton>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a className={`dropdown-item ${lang === "en" ? "is-active" : ""}`} onClick={changeToEN}>
              English
            </a>
            <a className={`dropdown-item ${lang === "es" ? "is-active" : ""}`} onClick={changeToES}>
              Español
            </a>
            <a className={`dropdown-item ${lang === "zh" ? "is-active" : ""}`} onClick={changeToCN}>
              简体中文
            </a>
            <a className={`dropdown-item ${lang === "ja" ? "is-active" : ""}`} onClick={changeToJP}>
              日本語
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ToggleLangDropdown.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
}

export default ToggleLangDropdown;