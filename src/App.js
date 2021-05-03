/* The beginning of the universe */

/* import:
  React -> Framework
  Login -> Component -> Location -> src/components/login
  BrowserRouter, Route -> Package for Route, Pagination
  Hero -> Component -> Location -> src/components/hero

  Files:
  Hero, Login

  Package || Framework:
  React, React-router-dom
*/

import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Alert from "./components/alert/Alert";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  /* 
    Here I create a function that will render at boot time.
    Using the package mentioned above.
  */
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
  });
  return (
    <>
      {showPopup && <Alert />}
      <BrowserRouter>
        {/* 
          Here we give the first boot page component
          As you know the first page loads / expands.
          We have authentication, if you do not enter
          the name you will not be allowed in the game
      */}
        <Route path="/" exact component={Login}></Route>
        {/* 
          The quiz component where everything happens. Which may be interesting to you.
        */}
        <Route path="/quiz" component={Hero}></Route>
      </BrowserRouter>
    </>
  );
}
