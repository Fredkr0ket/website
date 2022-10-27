import React from "react";
import {Outlet} from "react-router-dom";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer"
const Layout = () => {
  return (
    <>
      <Navbars />
      <Outlet />
    </>
  );
};

export default Layout;