import React from "react";

export const About = () => {
  let aboutStyle = {
    minHeight: "80vh",
    margin: "10px auto",
  };
  return (
    <div className="container" style={aboutStyle}>
      <h3 className="text-center">How to use it?</h3>
      <br />
      <br />

      <ol>
        <li>
          Enter your todo in the input box and it will be added in the below
          todo list
        </li>
        <br />
        <li>
          When work is done just click on the{" "}
          <button type="submit" class="btn btn-danger">
            Delete
          </button>{" "}
          button and it will be removed from your list
        </li>
      </ol>
    </div>
  );
};
