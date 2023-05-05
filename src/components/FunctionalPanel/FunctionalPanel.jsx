import React from "react";
import { Routes, Route, useHref, Navigate } from "react-router-dom";
import Profile from "../Profile/Profile";

import styles from "./FunctionalPanel.module.scss";
import { useSelector } from "react-redux";

function FunctionalPanel() {
	const currentPage = useHref().slice(1);
	const { nickname } = useSelector(({user}) => user);

	const titles = {
		profile: nickname,
		workouts: "Тренировки",
		exercises: "Упражнения",
		suplements: "Спортивные добавки",
	};

	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>{titles[currentPage]}</h1>
			<Routes>
				<Route path="*" element={<Navigate to="/profile" />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/workouts" element={<span>workouts</span>} />
				<Route path="/exercises" element={<span>exercises</span>} />
				<Route path="/suplements" element={<span>suplements</span>} />
			</Routes>
		</div>
	);
}

export default FunctionalPanel;
