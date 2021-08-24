import React, { useState } from "react";
import App from "./App";
import { ApplicationContext } from "./context/App/ApplicationContext";

export default function Application() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <ApplicationContext.Provider value={{ clicked, setClicked }}>
        <App />
      </ApplicationContext.Provider>
    </>
  );
}
