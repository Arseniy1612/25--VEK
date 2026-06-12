import React, { useContext, useState } from "react";
import "./SeatAds.css";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom"; 
import img1 from "../assets/seat4.jpg";
import img2 from "../assets/seat5.jpg";
import img3 from "../assets/seat6.jpg";

function SeatAds() {
  const { language } = useContext(LanguageContext);
  const [activeImg, setActiveImg] = useState(null);
  const navigate = useNavigate(); 
  const texts = {
    ru: {
      title: "Реклама на подголовниках и спинках сидений",
      blocks: [
        {
          img: img1,
          img2: img3,
          paragraph: `Часто рекламу в салоне считают навязчивой, но именно это делает её эффективной.
                      Пассажир не может переключить или игнорировать объявление — он обязательно его прочитает.`,
          highlight: "Это один из самых продающих форматов рекламы благодаря длительному контакту."
        },
        {
          heading: "Почему это работает",
          features: [
            { title: "Невозможно игнорировать", text: "реклама прямо перед глазами пассажира" },
            { title: "Высокая эффективность", text: "лучшее соотношение цены и результата" },
            { title: "Рост популярности", text: "от 5 до 500 машин за несколько лет" },
          ]
        },
        {
          heading: "География размещения",
          paragraph: `Реклама доступна в большинстве городов Украины: Одесса, Киев, Днепр,
                      Харьков, Запорожье, Львов и другие. Если вашего города нет — уточняйте у нас.`
        },
        {
          img: img2,
          heading: "Дополнительная возможность — визитки",
          paragraph: `Мы предлагаем размещение визиток под рекламой в специальных карманах.
                      Пассажир может не только прочитать, но и забрать информацию с собой.`,
          list: [
            "Целевая раздача клиентам",
            "Работает даже зимой",
            "Не нужно нанимать промоутеров"
          ]
        },
        {
          heading: "Преимущества",
          featuresOnly: [
            "Низкая стоимость",
            "Большой охват аудитории",
            "Длительный контакт",
            "Высокая запоминаемость"
          ]
        },
        {
          highlight: "Вам нужно только сформулировать идею — всё остальное сделаем мы: от дизайна до размещения."
        },
        {
          cta: {
            heading: "Начните рекламную кампанию",
            text: "Свяжитесь с нами и получите консультацию",
            button: "Связаться"
          }
        }
      ]
    },

    ua: {
      title: "Реклама на підголівниках та спинках сидінь",
      blocks: [
        {
          img: img1,
          img2: img3,
          paragraph: `Рекламу в салоні часто вважають нав'язливою, але саме це робить її ефективною.
                      Пасажир не може переключити або ігнорувати оголошення — він обов'язково його прочитає.`,
          highlight: "Це один із найбільш продаючих форматів реклами завдяки тривалому контакту."
        },
        {
          heading: "Чому це працює",
          features: [
            { title: "Неможливо ігнорувати", text: "реклама прямо перед очима пасажира" },
            { title: "Висока ефективність", text: "найкраще співвідношення ціни та результату" },
            { title: "Зростання популярності", text: "від 5 до 500 машин за кілька років" },
          ]
        },
        {
          heading: "Географія розміщення",
          paragraph: `Реклама доступна в більшості міст України: Одеса, Київ, Дніпро,
                      Харків, Запоріжжя, Львів та інші. Якщо вашого міста немає — уточнюйте у нас.`
        },
        {
          img: img2,
          heading: "Додаткова можливість — візитки",
          paragraph: `Ми пропонуємо розміщення візиток під рекламою у спеціальних кишенях.
                      Пасажир може не тільки прочитати, а й забрати інформацію з собою.`,
          list: [
            "Цільова роздача клієнтам",
            "Працює навіть взимку",
            "Не потрібно наймати промоутерів"
          ]
        },
        {
          heading: "Переваги",
          featuresOnly: [
            "Низька вартість",
            "Великий охоп аудиторії",
            "Тривалий контакт",
            "Висока запам'ятовуваність"
          ]
        },
        {
          highlight: "Вам потрібно лише сформулювати ідею — все інше зробимо ми: від дизайну до розміщення."
        },
        {
          cta: {
            heading: "Розпочніть рекламну кампанію",
            text: "Зв'яжіться з нами та отримайте консультацію",
            button: "Зв'язатися"
          }
        }
      ]
    }
  };

  const t = texts[language];

  return (
    <section className="seat">
      <h1>{t.title}</h1>

      {t.blocks.map((block, idx) => (
        <div key={idx}>
          {block.img && !block.heading && (
            <div className="seat-hero">
              <div className="image-row">
                <img src={block.img} alt="" onClick={() => setActiveImg(block.img)} />
                {block.img2 && (
                  <img src={block.img2} alt="" onClick={() => setActiveImg(block.img2)} />
                )}
              </div>

              {block.paragraph && <p>{block.paragraph}</p>}
              {block.highlight && <div className="highlight">{block.highlight}</div>}
            </div>
          )}
          {block.img && block.heading && (
            <div className="image-text">
              <div className="text">
                <h2>{block.heading}</h2>
                <p>{block.paragraph}</p>
                {block.list && (
                  <ul>{block.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
                )}
              </div>
              <img src={block.img} alt="" onClick={() => setActiveImg(block.img)} />
            </div>
          )}

          {block.heading && block.features && (
            <>
              <h2>{block.heading}</h2>
              <div className="features">
                {block.features.map((f, i) => (
                  <div key={i} className="card">
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {block.heading && block.featuresOnly && (
            <>
              <h2>{block.heading}</h2>
              <div className="features">
                {block.featuresOnly.map((f, i) => (
                  <div key={i} className="card">{f}</div>
                ))}
              </div>
            </>
          )}

          {block.heading && block.paragraph && !block.img && !block.features && (
            <>
              <h2>{block.heading}</h2>
              <p>{block.paragraph}</p>
            </>
          )}

          {block.highlight && !block.img && !block.heading && (
            <div className="highlight">{block.highlight}</div>
          )}

          {block.cta && (
            <div className="cta">
              <h2>{block.cta.heading}</h2>
              <p>{block.cta.text}</p>
              <button onClick={() => navigate("/kontakty")}>
                {block.cta.button}
              </button>
            </div>
          )}

        </div>
      ))}

      {activeImg && (
        <div className="fullscreen" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="" />
        </div>
      )}
    </section>
  );
}

export default SeatAds;