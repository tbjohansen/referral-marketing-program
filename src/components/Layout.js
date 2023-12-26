import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className={`relative w-screen bg-thirdColor`}>
      <NavBar />
      <div className="mx-28">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
