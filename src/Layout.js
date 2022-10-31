import Navbar from "./home/navbar/Navbar";
import Footer from "./home/footer/Footer";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
