import React from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import About from "../About/About";

import "./Profile.css";

const Profile = () => {
  const location = useLocation();

  return (
    <div className="profile">
      <Sidebar />
      <About data={location} />
    </div>
  );
};

export default Profile;
