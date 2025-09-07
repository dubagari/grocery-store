import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import PageNotFund from "./PageNotFund";
import Cart from "./Cart";
import Signup from "./Signup";
import Login from "./Login";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<PageNotFund />} />
      </Routes>
    </>
  );
};

export default Layout;
