import Button from "./Button";
import React, { useState, useEffect, useInsertionEffect } from "react";
import styles from "./App.module.css";

function Hello() {
  /*
  function byeFn() {
    console.log("Bye :)");
  }

  function hiFn() {
    console.log("created!");
    return byeFn;
  }
  useEffect(hiFn, []);
*/
  /*
useEffect(function() {
    console.log("created");
    return function() {
      console.log("destroyed");
    };
  }, []);
*/
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
