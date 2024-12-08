import React, { useContext } from 'react'
import { ThemeContext } from '../ModeContext/Mode';
import { MdLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    const currentLanguage = i18n.language;
  return (
    <div className="nav-head fixed-top d-flex justify-content-between align-items-center mx-3 my-2">
        <p>{t("Quick sale: 20% off products purchased today")}</p>
        <Dropdown>
          <Dropdown.Toggle
            className="custom-dropdown-toggle"
            id="dropdown-basic"
          >
            <ReactCountryFlag
              countryCode={
                currentLanguage === "az"
                  ? "AZ"
                  : currentLanguage === "ru"
                  ? "RU"
                  : "GB"
              }
              svg
              style={{ marginRight: "10px" }}
            />
            {currentLanguage === "az"
              ? "Az"
              : currentLanguage === "ru"
              ? "Rus"
              : "En"}
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu text-end">
            {["az", "ru", "en"].map(
              (lang) =>
                currentLanguage !== lang && (
                  <Dropdown.Item
                    onClick={() => changeLanguage(lang)}
                    key={lang}
                  >
                    <ReactCountryFlag
                      countryCode={
                        lang === "az" ? "AZ" : lang === "ru" ? "RU" : "GB"
                      }
                      svg
                      style={{ marginRight: "10px" }}
                    />
                    {lang === "az" ? "Az" : lang === "ru" ? "Rus" : "En"}
                  </Dropdown.Item>
                )
            )}
          </Dropdown.Menu>
          <button
            variant="outline-light"
            className="fs-5 icons"
            onClick={toggleTheme}
            style={{ marginRight: "30px" }}
          >
            {isDarkMode ? <BsMoonStarsFill /> : <MdLightMode />}
          </button>
        </Dropdown>
      </div>
  )
}

export default Header
