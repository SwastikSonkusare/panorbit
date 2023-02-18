import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { panorbitApi } from "../../assets/api";

import "./Card.css";

const Card = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    setLoading(true);

    const {
      data: { users },
    } = await axios.get(panorbitApi);
    setUser(users);
    setLoading(false);

    localStorage.setItem("Users", JSON.stringify(users));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const profilePage = (d) => {
    console.log("clicked");
    navigate("/profile", { state: d });
  };

  return (
    <>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
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
      )}
    </>
  );
};

export default Card;
