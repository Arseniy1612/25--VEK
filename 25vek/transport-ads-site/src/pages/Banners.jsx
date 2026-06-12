import React, { useContext, useState } from "react";
import "./Banners.css";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/banner3.jpg";
import img2 from "../assets/banner4.jpg";
import img3 from "../assets/banner5.jpg";
function Banners() {
  const { language } = useContext(LanguageContext);
  const [activeImg, setActiveImg] = useState(null); 
  const navigate = useNavigate(); 
  const texts = {
    ru: {
      title: "Баннерные растяжки",
      blocks: [
        {
          img: img1,
          img2: img3,
          paragraph: `Баннерные растяжки — один из самых популярных и доступных видов рекламы
                      внутри транспорта. Они размещаются за спиной водителя и привлекают внимание
                      каждого пассажира при выходе.`,
          highlight: "Практически каждый пассажир видит такую рекламу при оплате проезда."
        },
        {
          heading: "Почему это работает",
          featuresOnly: ["Максимальный охват", "Низкая стоимость", "Гарантированные просмотры"]
        },
        {
          paragraph: `Часто клиенты хотят попробовать рекламу на одной машине. Но это неэффективно —
                      минимальное количество транспорта необходимо для достижения результата.`
        },
        {
          highlight: "Мы всегда честно подскажем, если выбранный объем не даст нужного эффекта."
        },
        {
          img: img2,
          alt: "Размер баннера",
          heading: "Требования к макету",
          paragraph: `Размер баннера: 90×15 см — его хорошо видят все пассажиры.`,
          list: ["Размер шрифта не менее 120", "Краткий и понятный текст", "Минимум лишних изображений"]
        },
        {
          heading: "Сравнение маршрутов",
          table: {
            headers: ["", "Длинный маршрут", "Короткий маршрут"],
            rows: [
              ["Рейсы", "3 круга", "5–6 кругов"],
              ["Время поездки", "25 минут", "15 минут"],
              ["Пассажиры", "~500 в день", "~500 в день"],
              ["Рабочее время", "5:30 – 22:00", "7:00 – 21:00"],
              ["Количество машин", "55", "28"]
            ]
          }
        },
        {
          highlight: "Длинные и короткие маршруты дают примерно одинаковый охват аудитории."
        },
        {
          cta: {
            heading: "Узнайте больше",
            text: "Свяжитесь с нами для консультации",
            button: "Связаться"
          }
        }
      ]
    },

    ua: {
      title: "Банерні розтяжки",
      blocks: [
        {
          img: img1,
          img2: img3,
          paragraph: `Банерні розтяжки — один із найпопулярніших та доступних видів реклами
                      всередині транспорту. Вони розміщуються за спиною водія і привертають увагу
                      кожного пасажира при виході.`,
          highlight: "Практично кожен пасажир бачить таку рекламу при оплаті проїзду."
        },
        {
          heading: "Чому це працює",
          featuresOnly: ["Максимальний охоп", "Низька вартість", "Гарантовані перегляди"]
        },
        {
          paragraph: `Часто клієнти хочуть спробувати рекламу на одній машині. Але це неефективно —
                      мінімальна кількість транспорту необхідна для досягнення результату.`
        },
        {
          highlight: "Ми завжди чесно підкажемо, якщо обраний обсяг не дасть потрібного ефекту."
        },
        {
          img: img2,
          alt: "Розмір банера",
          heading: "Вимоги до макета",
          paragraph: `Розмір банера: 90×15 см — його добре видно всім пасажирам.`,
          list: ["Розмір шрифту не менше 120", "Короткий та зрозумілий текст", "Мінімум зайвих зображень"]
        },
        {
          heading: "Порівняння маршрутів",
          table: {
            headers: ["", "Довгий маршрут", "Короткий маршрут"],
            rows: [
              ["Рейси", "3 кола", "5–6 кіл"],
              ["Час поїздки", "25 хвилин", "15 хвилин"],
              ["Пасажири", "~500 на день", "~500 на день"],
              ["Робочий час", "5:30 – 22:00", "7:00 – 21:00"],
              ["Кількість машин", "55", "28"]
            ]
          }
        },
        {
          highlight: "Довгі та короткі маршрути дають приблизно однаковий охоп аудиторії."
        },
        {
          cta: {
            heading: "Дізнайтеся більше",
            text: "Зв'яжіться з нами для консультації",
            button: "Зв'язатися"
          }
        }
      ]
    }
  };

  const t = texts[language];

  return (
    <section className="banners">
      <h1>{t.title}</h1>

      {t.blocks.map((block, idx) => (
        <div key={idx}>
          {block.img && !block.heading && (
            <div className="banners-hero">
              <div className="image-row">
                <img src={block.img} alt="" onClick={() => setActiveImg(block.img)} />
                {block.img2 && <img src={block.img2} alt="" onClick={() => setActiveImg(block.img2)} />}
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
                {block.list && <ul>{block.list.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              </div>
              <img src={block.img} alt={block.alt} onClick={() => setActiveImg(block.img)} />
            </div>
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
          {block.paragraph && !block.img && !block.heading && <p>{block.paragraph}</p>}
          {block.highlight && !block.img && !block.heading && (
            <div className="highlight">{block.highlight}</div>
          )}
          {block.table && (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>{block.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {block.cta && (
            <div className="cta">
              <h2>{block.cta.heading}</h2>
              <p>{block.cta.text}</p>
              <button onClick={() => navigate("/kontakty")}>{block.cta.button}</button>
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

export default Banners;