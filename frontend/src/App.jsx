import React from "react";
import MainLandingPage from "./Landing Page/MainLandingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Login-Sign-Up pages/SignUp";
import LogIn from "./Login-Sign-Up pages/LogIn";
import MainLayOut from "./Main Page/MainLayOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<MainLayOut />} />
    </Routes>
  );
};

export default App;
