import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import Header from "./components/Header";
import Body from "./components/Body";
// const Body =React.lazy(()=>import('./components/Body'))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Body />
  </>
);
