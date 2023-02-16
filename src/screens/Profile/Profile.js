import React from "react";
import Sidebar from "../../components/Card/Sidebar/Sidebar";
import About from "../About/About";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <About />
    </div>
  );
};

export default Profile;
