import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../gqloperations/mutation";
import { GET_ALL_QUOTES } from "../gqloperations/queries";
const CreateQuote = () => {
  const [quote, setQuote] = useState("");

  const [createQuote, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: ["getAllQuotes", "getMyProfile"],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        quote: quote,
      },
    });
  };
  if (loading)
    return (
      <div className="container my-container">
        <h1>Laoding</h1>
      </div>
    );
  
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && <div className="green card-panel">{data.quote}</div>}
      <h5>Create Quote!!</h5>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="write your quote"
          required
          name="quote"
          onChange={(e) => {
            setQuote(e.target.value);
          }}
        />
        <button className="btn green darken-2" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateQuote;
