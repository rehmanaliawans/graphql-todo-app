import React from "react";

const Profile = () => {
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          style={{
            border: "2px solid",
            marginTop: "10px",
          }}
          className="circle"
          src="https://robohash.org/javaid.png?size=200x200"
          alt="dasd"
        />
        <h5>Rehman ALi</h5>
        <h5>Email- rehmanaliawans@gmail.com </h5>
      </div>
      <blockquote>
        <h6>If it work dont touch it</h6>
        <p className="right-align">Rehman ali </p>
      </blockquote>
    </div>
  );
};

export default Profile;
