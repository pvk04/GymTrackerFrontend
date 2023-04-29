import Modal from "../../components/Modal/Modal";
import LabelInput from "../../components/LabelInput/LabelInput";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import styles from "./AuthPage.module.scss";

function LoginPage() {
	function login(e) {
		e.preventDefault();
		console.log("вход");
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
					<Link className={styles.formSecondary} to="/password-reset">
						Забыли пароль?
					</Link>
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
