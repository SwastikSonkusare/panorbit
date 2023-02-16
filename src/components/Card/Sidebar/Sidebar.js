import React, { useState } from "react";

import "./Sidebar.css";

const Sidebar = () => {
  const navbarItems = ["Profile", "Posts", "Gallery", "ToDo"];
  const [isActive, setIsActive] = useState(false);

  const onToggleMenu = () => {
    setIsActive(true);
  };

  return (
    <navbar>
      <ul>
        {navbarItems.map((item, i) => (
          <li key={i} onClick={onToggleMenu}>
            <a href="#">{item}</a>
            <div className="active"></div>
          </li>
        ))}
      </ul>
    </navbar>
  );
};

export default Sidebar;
