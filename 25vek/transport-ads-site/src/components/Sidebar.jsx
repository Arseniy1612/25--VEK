import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext"; 
import "./Sidebar.css";

function Sidebar() {
  const { language } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const links = {
    ru: [
      { to: "/reklama-na-podgolovnikah-i-na-spinkah-sidenij/", text: "Подголовники и спинки" },
      { to: "/bannernye-rastyazhki/", text: "Баннерные растяжки" },
      { to: "/reklama-na-transporte/", text: "Реклама на транспорте" },
      { to: "/fotogalereya-nashi-raboty/", text: "Фотогалерея" },
      { to: "/patenty/", text: "Патенты" },
      { to: "/reklama-na-potolkah/", text: "Реклама на потолках" },
      { to: "/naklejki-na-dveryah/", text: "Наклейки на дверях" },
    ],
    ua: [
      { to: "/reklama-na-podgolovnikah-i-na-spinkah-sidenij/", text: "Підголівники та спинки" },
      { to: "/bannernye-rastyazhki/", text: "Банерні розтяжки" },
      { to: "/reklama-na-transporte/", text: "Реклама на транспорті" },
      { to: "/fotogalereya-nashi-raboty/", text: "Фотогалерея" },
      { to: "/patenty/", text: "Патенти" },
      { to: "/reklama-na-potolkah/", text: "Реклама на стелі" },
      { to: "/naklejki-na-dveryah/", text: "Наклейки на дверях" },
    ]
  };

  return (
  <>
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav className="sidebar-nav">
        {links[language].map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </aside>

    <div
      className="sidebar-tab"
      onClick={() => setOpen(!open)}
    ></div>
  </>
);
}

export default Sidebar;