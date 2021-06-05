import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ hi2, default_prop }) => {
  const hi = { firstname: "jon", age: 34 };

  //console.log(hi2);

  return (
    <>
      {/*  <pre>{JSON.stringify(hi, null, 3)}</pre> */}
      <h3>from first app component {hi.firstname}</h3>
      <p>{hi2}</p>
      <p>{default_prop}</p>
    </>
  );
};
FirstApp.propTypes = {
  hi2: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  default_prop: "I am by default",
};
export default FirstApp;
