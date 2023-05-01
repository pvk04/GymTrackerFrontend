import React, { useState } from "react";
import { Routes, Route, useHref } from "react-router-dom";
import Profile from "../Profile/Profile";

import styles from "./FunctionalPanel.module.scss";

function FunctionalPanel() {
	const currentPage = useHref().slice(1);

	const titles = {
		profile: "Pvk04",
		workouts: "Тренировки",
		exercises: "Упражнения",
		suplements: "Спортивные добавки",
	};

	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>{titles[currentPage]}</h1>
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/workouts" element={<span>workouts</span>} />
				<Route path="/exercises" element={<span>exercises</span>} />
				<Route path="/suplements" element={<span>suplements</span>} />
			</Routes>
		</div>
	);
}

export default FunctionalPanel;
