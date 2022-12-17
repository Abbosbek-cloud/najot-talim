import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/products" element={<Products />} /> */}
    </Routes>
  );
}

export default App;
