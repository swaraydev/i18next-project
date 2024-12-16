import { changeLanguage } from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "es", lang: "Espagnol" },
  { code: "ar", lang:"arabe" },
];

const LangaugeSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //pour le language
  useEffect(() => {
    document.body.dir = i18n.dir()
  } ,[i18n,i18n.language])

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.languages ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LangaugeSelector;
