import { Routes, Route } from "react-router-dom";
import Container from "../../components/Container/Container";
import AsideBar from "../../components/AsideBar/AsideBar";

import styles from "./MainPage.module.scss";

function MainPage() {
	return (
		<main>
			<Container>
				<AsideBar />
				<Routes>
					<Route path="/profile" element={<h1>profile</h1>} />
					<Route path="/workouts" element={<h1>workouts</h1>} />
					<Route path="/exercises" element={<h1>exercises</h1>} />
					<Route path="/suplements" element={<h1>suplements</h1>} />
				</Routes>
			</Container>
		</main>
	);
}

export default MainPage;
