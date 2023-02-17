import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import About from "../About/About";

import { useLocation } from "react-router-dom";

import "./Profile.css";
import Modal from "../../components/Modal/Modal";

const Profile = () => {
  const location = useLocation();

  const currentRoute = location.pathname;
  console.log(currentRoute);

  // console.log(location.state.name);

  return (
    <div className="profile">
      <Sidebar />
      <About data={location} />
    </div>
    // <>
    //   {currentRoute === "/profile" ? (
    //     <div className="profile">
    //       <Sidebar />
    //       <About data={location} />
    //     </div>
    //   ) : (
    //     <div className="profile">
    //       <Sidebar />
    //       <ComingSoon />
    //     </div>
    //   )}
    // </>
  );
};

export default Profile;
