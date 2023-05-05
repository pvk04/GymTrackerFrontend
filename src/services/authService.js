import api from "../http/index";

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
