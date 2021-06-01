import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  //usinsg hooks
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    //directly modify the state prop
    setCounter(counter + 1);

    //through an arrow function an a reference to state prop
    //setCounter((c) => c + 1);
  };
  const handleSubstraction = (e) => {
    //directly modify the state prop
    setCounter(counter - 1);
  };
  //to reset the state to their initial value
  const resetState = (e) => {
    setCounter(value);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={resetState}>resetState</button>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstraction}>-1</button>
    </>
  );
};

export default CounterApp;
CounterApp.propTypes = {
  value: PropTypes.number,
};
