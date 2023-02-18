import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./Card.css";

const Card = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    setLoading(true);

    const {
      data: { users },
    } = await axios.get("https://panorbit.in/api/users.json");
    setLoading(false);

    setUser(users);

    localStorage.setItem("Users", JSON.stringify(users));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const profilePage = (d) => {
    navigate("/profile", { state: d });
  };

  return (
    <>
      {/* <div class="container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style="stroke: none; fill:red;"
          ></path>
        </svg>
      </div> */}
      <div className="card">
        <h2 className="card__header">Select an account</h2>
        <div className="card__container">
          {!loading &&
            user.map((d, i) => (
              <div key={i} className="person" onClick={() => profilePage(d)}>
                <img
                  src={d.profilepicture}
                  alt=""
                  className="person__image"
                ></img>
                <h3 className="person__name">{d.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Card;
