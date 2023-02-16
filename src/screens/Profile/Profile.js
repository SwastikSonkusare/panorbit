import React from "react";
import Sidebar from "../../components/Card/Sidebar/Sidebar";
import About from "../About/About";

import { useLocation } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  const location = useLocation();

  console.log(location.state.name);

  return (
    <div className="profile">
      <Sidebar />
      <About />
    </div>
  );
};

export default Profile;
