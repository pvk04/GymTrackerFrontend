import axios from "axios";
import api, { API_URL } from "../http/index";

export async function login(email, password) {
  return await api.post("/auth/login", { email, password });
}

export async function registration(nickname, email, dateBirth, password) {
  return await api.post("/auth/registration", {
    nickname,
    email,
    dateBirth,
    password,
  });
}

export async function logout() {
  localStorage.removeItem("token");
  return await api.post("/auth/logout");
}

export async function checkAuth() {
  return await axios.get(`${API_URL}/auth/refresh`, {
    withCredentials: true,
  });
}
