import React, { useContext } from "react";
import "./Prices.css";
import { LanguageContext } from "../context/LanguageContext";

import seatImg from "../assets/seat.jpg";
import bannerImg from "../assets/banner.jpg";
import wrapImg from "../assets/wrap.jpg";
import rearImg from "../assets/rear.jpg";
import tramImg from "../assets/tram.jpg";
import trolleyImg from "../assets/trolley.jpg";

function Prices() {
  const { language } = useContext(LanguageContext);

  const texts = {
    ru: {
      title: "Наши цены",
      subtitle: "Стоимость рекламы в транспорте (2026 год)",
      blocks: [
        {
          img: seatImg,
          alt: "Объявления на спинках сидений",
          title: "Объявления на спинках сидений (A4)",
          tableHead: ["Срок", "1 маршрутка"],
          tableBody: [["1 месяц", "900 грн"]],
          note: "Минимальный заказ: от 5 машин"
        },
        {
          img: bannerImg,
          alt: "Баннерные растяжки",
          title: "Баннерные растяжки за водителем",
          tableHead: ["Количество", "Цена за 1 авто"],
          tableBody: [["5","500 грн"], ["10","470 грн"], ["20","450 грн"]],
          note: null
        },
        {
          img: wrapImg,
          alt: "Наружная оклейка маршрутки",
          title: "Наружная оклейка маршрутки",
          tableHead: null,
          tableBody: [["Печать и поклейка","4800 грн"], ["Аренда (месяц)","3000 грн"]],
          note: "Дизайн макета — от 600 грн"
        },
        {
          img: rearImg,
          alt: "Реклама на заднем стекле",
          title: "Реклама на заднем стекле",
          tableHead: null,
          tableBody: [["Печать + монтаж","900 грн"], ["Аренда (месяц)","900 грн"]],
          note: "Итого за первый месяц: 1800 грн"
        },
        {
          img: tramImg,
          alt: "Брендирование трамваев",
          title: "Брендирование трамваев",
          tableHead: null,
          tableBody: [["Аренда","14 000 грн/мес"], ["Печать","280 грн/м²"], ["Монтаж","190 грн/м²"], ["Демонтаж","11 000 грн"]],
          note: null
        },
        {
          img: trolleyImg,
          alt: "Брендирование троллейбусов",
          title: "Брендирование троллейбусов",
          tableHead: null,
          tableBody: [["Аренда","11 000 грн/мес"], ["Печать","280 грн/м²"], ["Монтаж","190 грн/м²"], ["Демонтаж","11 000 грн"]],
          note: "Минимальный срок: 6 месяцев"
        }
      ],
      footNote: ["Цены актуальны на 2026 год", "Долгосрочные кампании рассчитываются индивидуально"]
    },
    ua: {
      title: "Наші ціни",
      subtitle: "Вартість реклами на транспорті (2026 рік)",
      blocks: [
        {
          img: seatImg,
          alt: "Оголошення на спинках сидінь",
          title: "Оголошення на спинках сидінь (A4)",
          tableHead: ["Термін", "1 маршрутка"],
          tableBody: [["1 місяць", "900 грн"]],
          note: "Мінімальне замовлення: від 5 машин"
        },
        {
          img: bannerImg,
          alt: "Банерні растяжки",
          title: "Банерні растяжки за водієм",
          tableHead: ["Кількість", "Ціна за 1 авто"],
          tableBody: [["5","500 грн"], ["10","470 грн"], ["20","450 грн"]],
          note: null
        },
        {
          img: wrapImg,
          alt: "Зовнішня обклейка маршрутки",
          title: "Зовнішня обклейка маршрутки",
          tableHead: null,
          tableBody: [["Друк та наклейка","4800 грн"], ["Оренда (місяць)","3000 грн"]],
          note: "Дизайн макета — від 600 грн"
        },
        {
          img: rearImg,
          alt: "Реклама на задньому склі",
          title: "Реклама на задньому склі",
          tableHead: null,
          tableBody: [["Друк + монтаж","900 грн"], ["Оренда (місяць)","900 грн"]],
          note: "Всього за перший місяць: 1800 грн"
        },
        {
          img: tramImg,
          alt: "Брендування трамваїв",
          title: "Брендування трамваїв",
          tableHead: null,
          tableBody: [["Оренда","14 000 грн/міс"], ["Друк","280 грн/м²"], ["Монтаж","190 грн/м²"], ["Демонтаж","11 000 грн"]],
          note: null
        },
        {
          img: trolleyImg,
          alt: "Брендування тролейбусів",
          title: "Брендування тролейбусів",
          tableHead: null,
          tableBody: [["Оренда","11 000 грн/міс"], ["Друк","280 грн/м²"], ["Монтаж","190 грн/м²"], ["Демонтаж","11 000 грн"]],
          note: "Мінімальний термін: 6 місяців"
        }
      ],
      footNote: ["Ціни актуальні на 2026 рік", "Довгострокові кампанії розраховуються індивідуально"]
    }
  };

  const t = texts[language];

  return (
    <section className="prices">
      <h1>{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>

      {t.blocks.map((block, i) => (
        <div key={i} className="price-block">
          <img src={block.img} alt={block.alt} />
          <div>
            <h2>{block.title}</h2>
            {block.tableHead && (
              <table>
                <thead>
                  <tr>
                    {block.tableHead.map((head, idx) => <th key={idx}>{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {block.tableBody.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {!block.tableHead && block.tableBody && (
              <table>
                <tbody>
                  {block.tableBody.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {block.note && <p>{block.note}</p>}
          </div>
        </div>
      ))}

      <div className="note">
        {t.footNote.map((note, idx) => <p key={idx}>{note}</p>)}
      </div>
    </section>
  );
}

export default Prices;