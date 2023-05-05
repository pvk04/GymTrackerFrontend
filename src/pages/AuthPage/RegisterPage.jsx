import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { registration } from "../../services/authService";
import Modal from "../../components/Modal/Modal";
import LabelInput from "../../components/LabelInput/LabelInput";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

import styles from "./AuthPage.module.scss";

import illustration from "../../assets/images/registrationIllustration.svg";

function RegisterPage() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [nickname, setNickname] = useState("");
	const [dateBirth, setDateBirth] = useState("");
	const [password, setPassword] = useState("");

  function formatDate(date) {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
  }

	function handleRegister(e) {
		e.preventDefault();
		registration(nickname, email, dateBirth, password)
			.then(({data}) => {
				localStorage.setItem("token", data.accessToken);
				dispatch(setUser({id: data.user.id, email: data.user.email, emailActivated: data.user.emailActivated}));
			})
			.catch((error) => {
				alert(error.response?.data?.message);
			});
	}

	return (
		<Modal>
			<div className={styles.container}>
				<form className={styles.form} onSubmit={handleRegister}>
					<h1 className={styles.formHeader}>Регистрация</h1>
					<div className={styles.formElement}>
						<LabelInput
							label="Email:"
							inputType="email"
							inputPlaceholder="Введите email"
							state={email}
							setState={setEmail}
						/>
					</div>
					<div className={styles.formElement}>
						<LabelInput
							label="Никнейм:"
							inputType="text"
							inputPlaceholder="Введите никнейм"
							state={nickname}
							setState={setNickname}
						/>
					</div>
					<div className={styles.formElement}>
						<LabelInput
							label="Дата рождения:"
							inputType="text"
							inputPlaceholder="12.12.2000"
							state={dateBirth}
							setState={setDateBirth}
							onFocus={(e) => {
								e.currentTarget.type = "date";
							}}
							onBlur={(e) => {
								e.currentTarget.type = "text";
							}}
							min="1900-01-01"
							max={formatDate(new Date())}
						/>
					</div>
					<div className={styles.formElement}>
						<LabelInput
							label="Пароль:"
							inputType="password"
							inputPlaceholder="Введите пароль"
							state={password}
							setState={setPassword}
						/>
					</div>
					<Button text="Зарегистрироваться" type={"submit"} />
					<Link
						className={`${styles.formSecondary} ${styles.formSecondaryReg}`}
						to="/login"
					>
						Вход
					</Link>
				</form>
				<img
					className={styles.illustration}
					src={illustration}
					alt="running man illustration"
				/>
			</div>
		</Modal>
	);
}

export default RegisterPage;
