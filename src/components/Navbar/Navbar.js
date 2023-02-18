import React from "react";

import "./Navbar.css";

const Navbar = ({ openModal, state }) => {
  return (
    <nav className="about__nav">
      <h2 className="about__heading">Profile</h2>
      <div className="about__picture" onClick={openModal}>
        <img src={state.profilepicture} alt=""></img>
        <h3>{state.name}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
