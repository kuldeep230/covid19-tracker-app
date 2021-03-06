import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./layout.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
