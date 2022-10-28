// 1) Import React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "animate.css";

// 2) Get reference to the div with ID root
const element = document.getElementById("root");
// 3) Tell React to get control of that element
const root = ReactDOM.createRoot(element);
// 4) show the App component on the screen by rendering it inside our div that have id='root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
