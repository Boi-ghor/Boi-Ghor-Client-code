import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiddleNav from "./Component/navbar/MiddleNav";
import TopNav from "./Component/navbar/TopNav";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <TopNav></TopNav>
        <MiddleNav></MiddleNav>
      </header>
    </BrowserRouter>
  );
};

export default App;
