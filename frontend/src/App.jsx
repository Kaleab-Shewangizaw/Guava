import React from "react";
import MainLandingPage from "./Landing Page/MainLandingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Login-Sign-Up pages/SignUp";
import LogIn from "./Login-Sign-Up pages/LogIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default App;
