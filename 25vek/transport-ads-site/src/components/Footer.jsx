import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Footer.css";

function Footer() {
  const { language } = useContext(LanguageContext);

  const texts = {
    ru: {
      contacts: "Контакты",
      tel1: "Тел: (048) 795-85-99",
      tel2: "(095) 938-36-46",
      mobile: "Моб: (093) 99-717-00",
      email: "info@25vek.com.ua",
      copy: "© 2026 Рекламное агентство «25 ВЕК»"
    },
    ua: {
      contacts: "Контакти",
      tel1: "Тел: (048) 795-85-99",
      tel2: "(095) 938-36-46",
      mobile: "Моб: (093) 99-717-00",
      email: "info@25vek.com.ua",
      copy: "© 2026 Рекламне агентство «25 ВІК»"
    }
  };

  const t = texts[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-block">
          <h3>{t.contacts}</h3>
          <p>{t.tel1}</p>
          <p>{t.tel2}</p>

          <p className="mobile">
            {t.mobile}
            <a href="https://t.me/vek_reklama" target="_blank">
              <img src="/icons/telegram.png" alt="telegram" />
            </a>
            <a href="viber://chat?number=+380939971700">
              <img src="/icons/viber.png" alt="viber" />
            </a>
          </p>

          <p>{t.email}</p>
        </div>

        <div className="footer-bottom">
          <p>{t.copy}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;