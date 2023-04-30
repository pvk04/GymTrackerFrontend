import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
	return (
		<Routes>
			<Route
				exact
				path="/*"
				// element={
				// 	!false ? <Navigate to="/login" replace /> : <HomePage />
				// }
				element={<MainPage />}
			/>
			<Route
				exact
				path="/login"
				element={false ? <Navigate to="/" replace /> : <LoginPage />}
			/>
			<Route exact path="/register" element={<RegisterPage />} />
		</Routes>
	);
}

export default App;
