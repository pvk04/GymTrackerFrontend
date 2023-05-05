import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../services/authService";
import { removeUser } from "../../store/slices/userSlice";
import { NavLink } from "react-router-dom";

import styles from "./AsideBar.module.scss";

import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.svg";
import workout from "../../assets/images/workout.svg";
import exercise from "../../assets/images/exercise.svg";
import suplement from "../../assets/images/suplement.svg";
import logoutIcon from "../../assets/images/logout.svg";

const MenuItems = [
	{ name: "Профиль", href: "/profile", icon: profile },
	{ name: "Тренировки", href: "/workouts", icon: workout },
	{ name: "Упражнения", href: "/exercises", icon: exercise },
	{
		name: "Спортпит",
		href: "/suplements",
		icon: suplement,
	},
];

function AsideBar() {
	const dispatch = useDispatch();

	function handleLogout(){
		logout().then(dispatch(removeUser())).catch(console.error);
	}

	return (
		<aside className={styles.aside}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
				<h1>GymTracker</h1>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{MenuItems.map(({ name, href, icon }, index) => (
						<li className={styles.navListElement} key={index}>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.navListElementActive : ``
								}
								to={href}
							>
								<img src={icon} alt="" />
								<span>{name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<button className={styles.logout} onClick={handleLogout}>
				<img src={logoutIcon} alt="" />
				<span>Выход</span>
			</button>
		</aside>
	);
}

export default AsideBar;
