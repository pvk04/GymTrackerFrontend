import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const isAuth = useSelector(({ user }) => user.isAuth);
  console.log(isAuth);
  return (
    <Routes>
      <Route
        exact
        path="/*"
        element={!isAuth ? <Navigate to="/login" replace /> : <MainPage />}
        // element={<MainPage />}
      />
      <Route
        exact
        path="/login"
        element={isAuth ? <Navigate to="/profile" replace /> : <LoginPage />}
        // element={<LoginPage />}
      />
      <Route exact path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
