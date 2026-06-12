import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Salon.css";
import { LanguageContext } from "../context/LanguageContext";

import salonImg from "../assets/seat2.jpg"; 
import salonImg2 from "../assets/banner2.jpg"; 

function Salon() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(null);
  const texts = {
    ru: {
      title: "Реклама в салоне транспорта",
      heroText: "Реклама внутри салона транспорта — идеальный способ донести информацию о акциях и предложениях. Она широко используется магазинами, банками, образовательными учреждениями и другими компаниями.",
      highlight: "Высокая запоминаемость делает этот формат особенно эффективным для продвижения бренда.",
      whyTitle: "Почему это эффективно",
      features: [
        { title: "15 000 человек", desc: "пассажиропоток одной маршрутки в месяц" },
        { title: "20 минут", desc: "средний контакт с рекламой" },
        { title: "Высокая вовлечённость", desc: "пассажиры физически не могут игнорировать рекламу" },
      ],
      typesTitle: "Виды рекламы в салоне",
      types: ["Баннерные растяжки", "Подголовники и спинки сидений", "Реклама на потолках", "Наклейки на дверях"],
      stepsTitle: "Что мы предлагаем",
      steps: [
        { title: "1. Дизайн", desc: "Разработка макета с учетом фирменного стиля" },
        { title: "2. Подготовка", desc: "Адаптация под формат транспорта" },
        { title: "3. Печать", desc: "Качественная печать материалов" },
        { title: "4. Размещение", desc: "Монтаж рекламы в транспорте" },
      ],
      whyUsTitle: "Почему выбирают нас",
      whyUs: ["Большой опыт работы", "Лучшие маршруты города", "Полный цикл услуг", "Профессиональные дизайнеры"],
      finalHighlight: "Вам нужно только выбрать срок размещения — остальное мы сделаем за вас.",
      ctaTitle: "Готовы разместить рекламу?",
      ctaText: "Свяжитесь с нами — мы подберем лучшее решение для вас",
      ctaButton: "Связаться"
    },
    ua: {
      title: "Реклама у салоні транспорту",
      heroText: "Реклама всередині салону транспорту — ідеальний спосіб донести інформацію про акції та пропозиції. Вона широко використовується магазинами, банками, освітніми установами та іншими компаніями.",
      highlight: "Висока запам'ятовуваність робить цей формат особливо ефективним для просування бренду.",
      whyTitle: "Чому це ефективно",
      features: [
        { title: "15 000 людей", desc: "пасажиропотік однієї маршрутки на місяць" },
        { title: "20 хвилин", desc: "середній контакт з рекламою" },
        { title: "Висока залученість", desc: "пасажири фізично не можуть ігнорувати рекламу" },
      ],
      typesTitle: "Види реклами у салоні",
      types: ["Банери-стрічки", "Підголівники та спинки сидінь", "Реклама на стелі", "Наклейки на дверях"],
      stepsTitle: "Що ми пропонуємо",
      steps: [
        { title: "1. Дизайн", desc: "Розробка макета з урахуванням фірмового стилю" },
        { title: "2. Підготовка", desc: "Адаптація під формат транспорту" },
        { title: "3. Друк", desc: "Якісний друк матеріалів" },
        { title: "4. Розміщення", desc: "Монтаж реклами у транспорті" },
      ],
      whyUsTitle: "Чому обирають нас",
      whyUs: ["Великий досвід роботи", "Кращі маршрути міста", "Повний цикл послуг", "Професійні дизайнери"],
      finalHighlight: "Вам потрібно лише обрати термін розміщення — решту ми зробимо за вас.",
      ctaTitle: "Готові розмістити рекламу?",
      ctaText: "Зв'яжіться з нами — ми підберемо найкраще рішення для вас",
      ctaButton: "Зв'язатися"
    }
  };

  const t = texts[language];

  return (
    <section className="salon">
      <h1>{t.title}</h1>

      <div className="salon-hero">
        <img
          src={salonImg}
          alt={t.title}
          onClick={() => setActiveImg(salonImg)}
          style={{ cursor: "pointer" }}
        />
        <div>
          <p>{t.heroText}</p>
          <div className="highlight">{t.highlight}</div>
        </div>
      </div>

      <h2>{t.whyTitle}</h2>
      <div className="features">
        {t.features.map((f, idx) => (
          <div key={idx} className="card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="image-text">
        <div className="text">
          <h2>{t.typesTitle}</h2>
          <ul className="list">
            {t.types.map((type, idx) => (
              <li key={idx}>{type}</li>
            ))}
          </ul>
        </div>
        <img
          src={salonImg2}
          alt={t.typesTitle}
          onClick={() => setActiveImg(salonImg2)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <h2>{t.stepsTitle}</h2>
      <div className="steps">
        {t.steps.map((s, idx) => (
          <div key={idx} className="step">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <h2>{t.whyUsTitle}</h2>
      <div className="features">
        {t.whyUs.map((item, idx) => (
          <div key={idx} className="card">{item}</div>
        ))}
      </div>

      <div className="highlight">{t.finalHighlight}</div>

      <div className="cta">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <button onClick={() => navigate("/kontakty/")}>
          {t.ctaButton}
        </button>
      </div>
      {activeImg && (
        <div
          className="fullscreen"
          onClick={() => setActiveImg(null)}
       >
          <img src={activeImg} alt="" />
        </div>
    )}
    </section>
  );
}

export default Salon;