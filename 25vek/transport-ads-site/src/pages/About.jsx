import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../context/LanguageContext";

import bogdanImg from "../assets/bogdan.jpg";
import etalonImg from "../assets/etalon.jpg";
import ivanImg from "../assets/ivan.jpg";

function About() {
  const { language } = useContext(LanguageContext);

  const texts = {
    ru: {
      title: "О компании «25 ВЕК»",
      intro: "Лучше всего о нас расскажут наши «друзья» — маршрутки, с которыми мы давно сотрудничаем.",
      cards: [
        {
          img: bogdanImg,
          alt: "Богдан",
          title: "Микроавтобус «Богдан»",
          paragraphs: [
            "С 2008 года мы сотрудничаем с компанией «25 Век». Именно в нашем салоне впервые появилась реклама формата А3.",
            "Сегодня реклама продолжает размещаться на многих маршрутах, делая салон аккуратным и привлекательным."
          ]
        },
        {
          img: etalonImg,
          alt: "Эталон",
          title: "Микроавтобус «Эталон»",
          paragraphs: [
            "Более 7 лет мы размещаем рекламу форматов А4 и А3, а также баннерные растяжки.",
            "Сегодня более 400 машин ежемесячно работают с «25 Век», развивая рынок рекламы на транспорте."
          ]
        },
        {
          img: ivanImg,
          alt: "Иван",
          title: "Микроавтобус «Иван»",
          paragraphs: [
            "Реклама на транспорте делает город ярче и помогает бизнесу находить клиентов.",
            "«25 Век» использует качественные материалы, что гарантирует долговечность и аккуратный внешний вид рекламы."
          ]
        }
      ],
      highlight: "Никто не расскажет о нас лучше, чем маршрутки, с которыми мы работаем каждый день."
    },
    ua: {
      title: "Про компанію «25 ВЕК»",
      intro: "Найкраще про нас розкажуть наші «друзі» — маршрутки, з якими ми давно співпрацюємо.",
      cards: [
        {
          img: bogdanImg,
          alt: "Богдан",
          title: "Мікроавтобус «Богдан»",
          paragraphs: [
            "З 2008 року ми співпрацюємо з компанією «25 Век». Саме в нашому салоні вперше з'явилася реклама формату А3.",
            "Сьогодні реклама продовжує розміщуватися на багатьох маршрутах, роблячи салон охайним та привабливим."
          ]
        },
        {
          img: etalonImg,
          alt: "Еталон",
          title: "Мікроавтобус «Еталон»",
          paragraphs: [
            "Більше 7 років ми розміщуємо рекламу форматів А4 та А3, а також банерні растяжки.",
            "Сьогодні понад 400 машин щомісяця працюють з «25 Век», розвиваючи ринок реклами на транспорті."
          ]
        },
        {
          img: ivanImg,
          alt: "Іван",
          title: "Мікроавтобус «Іван»",
          paragraphs: [
            "Реклама на транспорті робить місто яскравішим і допомагає бізнесу знаходити клієнтів.",
            "«25 Век» використовує якісні матеріали, що гарантує довговічність та охайний вигляд реклами."
          ]
        }
      ],
      highlight: "Ніхто не розкаже про нас краще, ніж маршрутки, з якими ми працюємо щодня."
    }
  };

  const t = texts[language];

  return (
    <section className="about">
      <h1>{t.title}</h1>
      <p className="intro">{t.intro}</p>

      <div className="about-list">
        {t.cards.map((card, i) => (
          <div key={i} className="about-item">
            <div className="about-img">
              <img src={card.img} alt={card.alt} />
            </div>
            <div className="about-text">
              <h2>{card.title}</h2>
              {card.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="highlight">{t.highlight}</div>
    </section>
  );
}

export default About;