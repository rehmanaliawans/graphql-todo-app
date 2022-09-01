import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUOTES } from "../gqloperations/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (loading)
    return (
      <div className="container my-container">
        <h1>Laoding</h1>
      </div>
    );
  if (error) {
    console.log("error ", error.message);
    return;
  }
  if (data.quotes.length === 0) {
    return (
      <div className="container my-container">
        <h3>No quotes available!</h3>
      </div>
    );
  }
  return (
    <div className="container my-container">
      {data.quotes.map((quote, index) => (
        <blockquote key={index}>
          <h6>{quote.name}</h6>
          <p className="right-align">{quote.by.firstName} </p>
        </blockquote>
      ))}
    </div>
  );
};

export default Home;
