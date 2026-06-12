import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "./Header.css";

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = {
    ru: [
      { to: "/reklama-na-transporte/", text: "Реклама на транспорте" },
      { to: "/reklama-v-salone/", text: "Реклама в салоне" },
      { to: "/novosti/", text: "Новости" },
      { to: "/reklamnaya-analitika/", text: "Рекламная аналитика" },
      { to: "/kontakty/", text: "Контакты" },
      { to: "/o-nas/", text: "О нас" },
      { to: "/nashi-tseny/", text: "Наши цены" },
    ],
    ua: [
      { to: "/reklama-na-transporte/", text: "Реклама на транспорті" },
      { to: "/reklama-v-salone/", text: "Реклама у салоні" },
      { to: "/novosti/", text: "Новини" },
      { to: "/reklamnaya-analitika/", text: "Рекламна аналітика" },
      { to: "/kontakty/", text: "Контакти" },
      { to: "/o-nas/", text: "Про нас" },
      { to: "/nashi-tseny/", text: "Наші ціни" },
    ]
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <NavLink to="/" className="logo">
            <span className="logo-main">25 ВЕК</span>
            <span className="logo-sub">
              {language === "ru"
                ? "Реклама на транспорте"
                : "Реклама на транспорті"}
            </span>
          </NavLink>
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links[language].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="header-right">

          <div className="lang-switch">
            <button
              className={language === "ru" ? "active" : ""}
              onClick={() => setLanguage("ru")}
            >
              RU
            </button>
            <button
              className={language === "ua" ? "active" : ""}
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
          </div>

          <button className="menu-btn" onClick={toggleMenu}>
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;