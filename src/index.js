//react para renderizar componentes
import React from "react";
//react dom nos ayuda a renderizar el dom, si usamos movil, usamos react-native
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
