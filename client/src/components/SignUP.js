import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGN_UP_USER } from "../gqloperations/mutation";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [signUpUser, { data, loading, error }] = useMutation(SIGN_UP_USER);
  if (loading)
    return (
      <div className="container my-container">
        <h1>Laoding</h1>
      </div>
    );

  const changeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser({
      variables: {
        userNew: formData,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && (
        <div className="green card-panel">
          {data.user.firstName} is Signed Up, you can login now!
        </div>
      )}
      <h5>SignUp!!</h5>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="first name"
          required
          name="firstName"
          onChange={(e) => {
            changeData(e);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          required
          name="lastName"
          onChange={(e) => {
            changeData(e);
          }}
        />
        <input
          type="text"
          placeholder="email"
          required
          name="email"
          onChange={(e) => {
            changeData(e);
          }}
        />
        <input
          type="password"
          placeholder="password"
          required
          name="password"
          onChange={(e) => {
            changeData(e);
          }}
        />
        <Link to="/singup">
          <p>Already have an account?</p>
        </Link>
        <button className="btn #7b1fa2 purple darken-2" type="submit">
          SingUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
