import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Pages = () => {
  return (
    <Routes path="/">
      <Route index element={<SignIn />} />
      <Route path="/cadastro" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Pages;
