import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Layout>
  );
};

export default App;
