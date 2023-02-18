import React from "react";
import { useNavigate } from "react-router-dom";

import uparrow from "../../assets/arrow.svg";

import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const navbarItems = [
    {
      id: 1,
      name: "Profile",
      link: "/profile",
    },
    {
      id: 2,
      name: "Posts",
      link: "/posts",
    },
    {
      id: 3,
      name: "Gallery",
      link: "/gallery",
    },
    {
      id: 4,
      name: "ToDo",
      link: "/todo",
    },
  ];

  const currentRoute = window.location.pathname;

  const onToggleMenu = (item) => {
    navigate(item.link);
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navbarItems.map((item, i) => (
          <li
            className="navbar__items"
            key={item.id}
            onClick={() => onToggleMenu(item)}
          >
            <a href={item.link}>{item.name}</a>
            <img
              src={currentRoute === item.link && uparrow}
              alt=""
              className={currentRoute === item.link ? "active" : ""}
            ></img>
            {/* <div className={currentRoute === item.link ? "active" : ""}></div> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
