import "./style.css";
import React, { useState } from "react";
import { ReactComponent as Icon } from "assets/img/dropdown.svg";
import { useTranslation } from "react-i18next";

function Dropdown() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  const [open, setOpen] = useState(false);
  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang)
  };

  return (
    <div className="dropdown">
      <div className="dropdown__flex" onClick={() => setOpen(true)}>
        <p>{language}</p>
        <Icon />
      </div>

      {open ? (
        <div className="open__items">
          <div className="open__item" onClick={() => {changeLanguageHandler("ru"); setOpen(false)}}>
            ru
          </div>
          <div className="open__item" onClick={() => {changeLanguageHandler("en"); setOpen(false)}}>
            en
          </div>
          <div className="open__item" onClick={() => {changeLanguageHandler("ar"); setOpen(false)}}>
            ar
          </div>
          <div className="open__item" onClick={() => {changeLanguageHandler("ch"); setOpen(false)}}>
            ch
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
