import React, { useContext } from "react";
import "./Patents.css";
import { LanguageContext } from "../context/LanguageContext";

function Patents() {
  const { language } = useContext(LanguageContext);

  const texts = {
    ru: {
      title: "Патенты",
      intro: "Реклама в подголовниках на спинках сидений является объектом интеллектуальной собственности и защищена патентом на полезную модель №32870 от 10.06.2008 г.",
      highlight1: "Данный вид рекламы охраняется Законом Украины «Про охрану прав на изобретения и полезные модели».",
      lawTitle: "Юридическая ответственность",
      laws: [
        {
          type: "Административная",
          desc: "Штраф до 3400 грн с конфискацией незаконной продукции и оборудования."
        },
        {
          type: "Криминальная",
          desc: "Штраф от 170 000 до 255 000 грн с возможным запретом деятельности до 3 лет и конфискацией продукции.",
          danger: true
        }
      ],
      highlight2: "Любое нарушение прав интеллектуальной собственности влечёт за собой ответственность согласно законодательству Украины."
    },
    ua: {
      title: "Патенти",
      intro: "Реклама у підголівниках на спинках сидінь є об’єктом інтелектуальної власності та захищена патентом на корисну модель №32870 від 10.06.2008 р.",
      highlight1: "Цей вид реклами охороняється Законом України «Про охорону прав на винаходи та корисні моделі».",
      lawTitle: "Юридична відповідальність",
      laws: [
        {
          type: "Адміністративна",
          desc: "Штраф до 3400 грн із конфіскацією незаконної продукції та обладнання."
        },
        {
          type: "Кримінальна",
          desc: "Штраф від 170 000 до 255 000 грн з можливим забороною діяльності до 3 років та конфіскацією продукції.",
          danger: true
        }
      ],
      highlight2: "Будь-яке порушення прав інтелектуальної власності тягне за собою відповідальність згідно з законодавством України."
    }
  };

  const t = texts[language];

  return (
    <section className="patents">
      <h1>{t.title}</h1>
      <p>{t.intro}</p>
      <div className="highlight">{t.highlight1}</div>

      <h2>{t.lawTitle}</h2>
      <div className="law-block">
        {t.laws.map((law, idx) => (
          <div key={idx} className={`law-card${law.danger ? " danger" : ""}`}>
            <h3>{law.type}</h3>
            <p>{law.desc}</p>
          </div>
        ))}
      </div>

      <div className="highlight">{t.highlight2}</div>
    </section>
  );
}

export default Patents;