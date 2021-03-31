import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Login}></Route>
        <Route path="/quiz" component={Hero}></Route>
      </BrowserRouter>
    </>
  );
}
