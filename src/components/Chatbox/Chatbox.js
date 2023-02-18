import React, { useState, useEffect } from "react";

import chatIcon from "../../assets/chatIcon.svg";
import arrow from "../../assets/arrow.svg";
import downArrow from "../../assets/down_arrow.svg";

import "./Chatbox.css";

const Chatbox = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    setLoading(true);

    const usersData = JSON.parse(localStorage.getItem("Users"));

    setLoading(false);
    setUsers(usersData);
  }, []);

  return (
    <>
      <div className={active ? "chatbox active" : "chatbox "}>
        <div className="chatbox__container">
          <div className="chatbox__menu">
            <div>
              <img src={chatIcon} alt=""></img>
              <small>Chats</small>
            </div>
            <img
              src={!active ? arrow : downArrow}
              alt=""
              className={!active ? "chatbox__arrow" : "chatbox__arrow active"}
              onClick={() => setActive(!active)}
            ></img>
          </div>
          {active && !loading && (
            <div className="chatbox__list">
              {users.map((user, i) => (
                <div key={i} className="person">
                  <img
                    src={user.profilepicture}
                    alt=""
                    className="person__image"
                  ></img>
                  <h4 className="person__name">{user.name}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbox;
