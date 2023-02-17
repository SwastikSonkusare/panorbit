import React from "react";

import Map from "../../components/Map/Map";

import { useJsApiLoader } from "@react-google-maps/api";

import "./About.css";

const About = ({ data: { state } }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBAbKfObY_hR1hQWUaOvz-QsLmVLyn9uDo",
  });

  // console.log(state);
  return (
    <div className="about">
      <nav className="about__nav">
        <h2 className="about__heading">Profile</h2>
        <div className="about__picture">
          <img src={state.profilepicture} alt=""></img>
          <h3>{state.name}</h3>
        </div>
      </nav>
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
            {/* <div className="company"> */}
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
            {/* </div> */}
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
        </div>
      </div>
    </div>
  );
};

export default About;
