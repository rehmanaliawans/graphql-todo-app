import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MY_PROFILE, GET_USER_BY_ID } from "../gqloperations/queries";
import { useParams } from "react-router-dom";
const OtherProfile = () => {
  const { userId } = useParams();
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: userId,
    },
  });

  if (loading)
    return (
      <div className="container my-container">
        <h1>Laoding</h1>
      </div>
    );
  if (error) {
    console.log("error ", error.message);
  }

  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          style={{
            border: "2px solid",
            marginTop: "10px",
          }}
          className="circle"
          src={`https://robohash.org/${data.user.firstName}.png?size=200x200`}
          alt="dasd"
        />
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h5>Email- {data.user.email}</h5>
      </div>
      {data.user.quotes.map((quote, index) => (
        <blockquote key={index}>
          <h6>{quote.name}</h6>
        </blockquote>
      ))}
    </div>
  );
};

export default OtherProfile;
