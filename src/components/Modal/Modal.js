import React, { useEffect, useState } from "react";

import "./Modal.css";

const Modal = ({ state }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    const usersData = JSON.parse(localStorage.getItem("Users"));
    console.log(usersData);

    setLoading(false);
    setUsers(usersData);
  }, []);

  console.log(users);

  return (
    <div className="modal">
      <img src={state.profilepicture} alt=""></img>
      <h4 className="user__name">{state.name}</h4>
      <h4 className="subheading">{state.email}</h4>
      <div className="modal__container">
        {!loading &&
          users.map((user, i) => (
            <div>
              <img src={user.profilepicture} alt=""></img>
              <h4>{user.name}</h4>
            </div>
          ))}
      </div>
      <button className="modal__btn">Sign out</button>
    </div>
  );
};

export default Modal;
