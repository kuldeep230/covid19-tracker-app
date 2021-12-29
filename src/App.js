import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
