import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gqloperations/mutation";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [signInUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const changeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signInUser({
      variables: {
        userSingin: formData,
      },
    });
  };
  if (loading)
    return (
      <div className="container my-container">
        <h1>Laoding</h1>
      </div>
    );
  if (data) {
    localStorage.setItem("token", data.user.token);
    navigate("/");
  }
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      <h5>Login!!</h5>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
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
          <p>Don't have an account?</p>
        </Link>
        <button className="btn #7b1fa2 purple darken-2" type="submit">
          SingIn
        </button>
      </form>
    </div>
  );
};

export default Login;
