import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  // note: return statement can be eliminated because of arrow function syntax
  return (
    <Fragment>
      <img src={spinner} alt="loading..." style={{ width: "200px", margin: "auto", display: "block" }} />
    </Fragment>
  );
};

export default Spinner;
