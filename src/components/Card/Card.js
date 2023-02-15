import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Card.css";

const Card = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState();

  const fetchUsers = async () => {
    setLoading(true);

    const { data } = await axios.get("https://panorbit.in/api/users.json");
    setLoading(false);

    setUser(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="card">
      <h2 className="card__header">Select an account</h2>
      <div className="card__container">
        {!loading &&
          user.map((d, i) => (
            <div key={i} className="profile">
              <img
                src={d.profilepicture}
                alt=""
                className="profile__image"
              ></img>
              <h3 className="profile__text">{d.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
