import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import About from "../About/About";

import { useLocation } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  const location = useLocation();

  // const currentRoute = location.pathname;
  // console.log(currentRoute);

  return (
    <div className="profile">
      <Sidebar />
      <About data={location} />
    </div>
  );
};

export default Profile;
