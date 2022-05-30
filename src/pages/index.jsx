import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Pages = () => {
  return (
    <Routes path="/">
      <Route index element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<SignUp />} />
    </Routes>
  );
};

export default Pages;
