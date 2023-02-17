import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  //   const navbarItems = ["Profile", "Posts", "Gallery", "ToDo"];
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
  //   const [isActive, setIsActive] = useState(false);

  const currentRoute = window.location.pathname;

  const onToggleMenu = (item) => {
    console.log(item.link);
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
            <a href="#">{item.name}</a>
            <div className={currentRoute === item.link ? "active" : ""}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
