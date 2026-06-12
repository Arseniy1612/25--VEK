import React, { useContext } from "react";
import heroImg from "../assets/hero.png";
import "./Hero.css";
import { LanguageContext } from "../context/LanguageContext";

function Hero() {
  const { language } = useContext(LanguageContext);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          {language === "ru"
            ? "Реклама на транспорте в Одессе"
            : "Реклама на транспорті в Одесі"}
        </h1>

        <p className="hero-subtitle">
          {language === "ru"
            ? "Эффективный охват тысяч людей ежедневно. Реклама в маршрутках, автобусах и троллейбусах."
            : "Ефективне охоплення тисяч людей щодня. Реклама в маршрутках, автобусах, тролейбусах та на вантажному транспорті."}
        </p>
      </div>
    </section>
  );
}

export default Hero;