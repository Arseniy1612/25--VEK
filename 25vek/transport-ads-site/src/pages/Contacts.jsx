import React, { useContext } from "react";
import "./Contacts.css";
import { LanguageContext } from "../context/LanguageContext";

function Contacts() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="contacts">

      <h1>
        {language === "ru" ? "Контакты" : "Контакти"}
      </h1>

      <div className="contacts-container">
        <div className="contacts-info">

          <h2>
            {language === "ru"
              ? "Рекламное агентство 25 ВЕК"
              : "Рекламне агентство 25 ВЕК"}
          </h2>

          <p>
            {language === "ru"
              ? "г. Одесса 65005 ул. Бугаевская, 35, БЦ «Меркурий», офис 406"
              : "м. Одеса 65005 вул. Бугаївська, 35, БЦ «Меркурій», офіс 406"}
          </p>

          <p>
            {language === "ru"
              ? "пн-пт: 10:00–18:00"
              : "пн-пт: 10:00–18:00"}
          </p>

          <div className="phones">
            <p>☎️ (048) 795-85-99</p>
            <p>📞 (095) 938-36-46</p>

            <p className="mobile">
              📳 (093) 99-717-00

              <a
                href="https://t.me/vek_reklama"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/telegram.png" alt="telegram" />
              </a>

              <a href="viber://chat?number=+380939971700">
                <img src="/icons/viber.png" alt="viber" />
              </a>
            </p>
          </div>

          <p>📨 info@25vek.com.ua</p>
        </div>

        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Одесса,Бугаевская,35&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contacts;