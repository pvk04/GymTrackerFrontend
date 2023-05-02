import api from "../http/index";

export async function login(email, password) {
	return api.post("/auth/login", { email, password });
}

export async function registration(nickname, email, dateBirth, password) {
	return api.post("/auth/registration", {
		nickname,
		email,
		dateBirth,
		password,
	});
}

export async function logout() {
	return api.post("/auth/logout");
}
