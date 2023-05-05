import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { setUser } from "./store/slices/userSlice";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import { checkAuth } from "./services/authService";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(({ user }) => user.id);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth()
        .then(({ data }) => {
          localStorage.setItem("token", data.accessToken);
          console.log(data);
          dispatch(setUser(data.user));
        })
        .catch(function (error) {
          alert(error.response?.data?.message);
        });
    }
  }, []);

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
