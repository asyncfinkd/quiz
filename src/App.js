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

import React, { Component } from "react";
import Alert from "./components/alert/Alert";
import Login from "./components/login/Login";
import Hero from "./components/hero/Hero";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = {
    showPopup: false,
  };
  /* 
     Here I create a function that will render at boot time.
     Using the package mentioned above.
   */
  componentWillMount = () => {
    setTimeout(() => {
      this.setState({ showPopup: (this.state.showPopup = true) });
    }, 2000);
  };
  render() {
    return (
      <>
        {this.state.showPopup && <Alert />}
        <BrowserRouter>
          {/* 
          Here we give the first boot page component
          As you know the first page loads / expands.
          We have authentication, if you do not enter
          the name you will not be allowed in the game
         */}
          <Route path="/" exact component={Hero}></Route>
          {/* 
          The quiz component where everything happens. Which may be interesting to you.
        */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
