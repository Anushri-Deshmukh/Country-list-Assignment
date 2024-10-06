import React from "react";
import "./App.css";

import Countries from "./pages/Countries";
import SingleCountry from "./pages/SingleCountry";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Countries />} />

        <Route path="/singlecountry/:name" element={<SingleCountry />} />
      </Routes>
    </>
  );
}

export default App;
