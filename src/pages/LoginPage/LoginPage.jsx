import Modal from "../../components/Modal/Modal";
import LabelInput from "../../components/LabelInput/LabelInput";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import styles from "./LoginPage.module.scss";

function LoginPage() {
	function login(e) {
		e.preventDefault();
	}

	return (
		<Modal dialogClassName={styles.dialog}>
			<form className={styles.form} onSubmit={login}>
				<h1 className={styles.formHeader}>Вход</h1>
				<div className={styles.formElement}>
					<LabelInput
						label="Email:"
						inputType="email"
						inputPlaceholder="Введите email"
					/>
				</div>
				<div className={styles.formElement}>
					<LabelInput
						label="Пароль:"
						inputType="password"
						inputPlaceholder="Введите пароль"
					/>
					<a href="#" className={styles.formSecondary}>
						Забыли пароль?
					</a>
				</div>
				<Button text="Войти" />
				<Link
					className={`${styles.formSecondary} ${styles.formSecondaryReg}`}
					to="/register"
				>
					Регистрация
				</Link>
			</form>
		</Modal>
	);
}

export default LoginPage;
