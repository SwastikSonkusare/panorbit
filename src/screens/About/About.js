import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

import Map from "../../components/Map/Map";
import Modal from "../../components/Modal/Modal";
import Chatbox from "../../components/Chatbox/Chatbox";
import Navbar from "../../components/Navbar/Navbar";

import "./About.css";

const About = ({ data: { state } }) => {
  const [modalState, setModalState] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  const openModal = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <div className="about">
        <Navbar openModal={openModal} state={state} />
        <div className="container">
          <div>
            <div className="user">
              <img
                src={state.profilepicture}
                alt=""
                className="user__profile"
              ></img>
              <h2 className="user__name">{state.name}</h2>
              <div className="user__details">
                <div>
                  <h4 className="subheading">Username : </h4>
                  <small>{state.username}</small>
                </div>
                <div>
                  <h4 className="subheading">email : </h4>
                  <small>{state.email}</small>
                </div>
                <div>
                  <h4 className="subheading">Phone : </h4>
                  <small>{state.phone}</small>
                </div>
                <div>
                  <h4 className="subheading">Website : </h4>
                  <small>{state.website}</small>
                </div>
              </div>
              <h2 className="subheading">Company</h2>
              <div className="user__details">
                <div>
                  <h4 className="subheading">Name : </h4>
                  <small>{state.company.name}</small>
                </div>
                <div>
                  <h4 className="subheading">catchphrase : </h4>
                  <small>{state.company.catchPhrase}</small>
                </div>
                <div>
                  <h4 className="subheading">bs : </h4>
                  <small>{state.company.bs}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="address">
            <h2 className="subheading">Address:</h2>
            <div className="user__details address__container">
              <div>
                <h4 className="subheading">Street : </h4>
                <small>{state.address.street}</small>
              </div>
              <div>
                <h4 className="subheading">Suite : </h4>
                <small>{state.address.suite}</small>
              </div>
              <div>
                <h4 className="subheading">City : </h4>
                <small>{state.address.city}</small>
              </div>
              <div>
                <h4 className="subheading">Zipcode : </h4>
                <small>{state.address.zipcode}</small>
              </div>
            </div>
            {!isLoaded ? "Map is loading" : <Map state={state} />}
            <Chatbox />
          </div>
        </div>
      </div>
      {modalState && <Modal state={state} />}
    </>
  );
};

export default About;
