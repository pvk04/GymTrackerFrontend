import Modal from "../../components/Modal/Modal";
import LabelInput from "../../components/LabelInput/LabelInput";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

import styles from "./AuthPage.module.scss";

function RegisterPage() {
	function register(e) {
		e.preventDefault();
		console.log('регистрация');
	}

	return (
		<Modal>
			<form className={styles.form} onSubmit={register}>
				<h1 className={styles.formHeader}>Регистрация</h1>
				<div className={styles.formElement}>
					<LabelInput
						label="Email:"
						inputType="email"
						inputPlaceholder="Введите email"
					/>
				</div>
				<div className={styles.formElement}>
					<LabelInput
						label="Никнейм:"
						inputType="text"
						inputPlaceholder="Введите никнейм"
					/>
				</div>
				<div className={styles.formElement}>
					<LabelInput
						label="Дата рождения:"
						inputType="date"
						inputPlaceholder="12.12.2000"
						onFocus={(e) => {
							e.currentTarget.type = "date";
						}}
						onBlur={(e) => {
							e.currentTarget.type = "text";
						}}
					/>
				</div>
				<div className={styles.formElement}>
					<LabelInput
						label="Пароль:"
						inputType="password"
						inputPlaceholder="Введите пароль"
					/>
				</div>
				<Button text="Зарегистрироваться" />
				<Link
					className={`${styles.formSecondary} ${styles.formSecondaryReg}`}
					to="/login"
				>
					Вход
				</Link>
			</form>
		</Modal>
	);
}

export default RegisterPage;
