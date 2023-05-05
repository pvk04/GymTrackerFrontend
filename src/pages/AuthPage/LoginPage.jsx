import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { login } from "../../services/authService";
import Modal from "../../components/Modal/Modal";
import LabelInput from "../../components/LabelInput/LabelInput";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import styles from "./AuthPage.module.scss";

import illustration from "../../assets/images/loginIllustration.svg";

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    login(email, password)
      .then(({data}) => {
        localStorage.setItem("token", data.accessToken);
        console.log(data);
        dispatch(setUser(data.user))
      })
      .catch(function (error) {
        alert(error.response?.data?.message)
      });
  }

  return (
    <Modal dialogClassName={styles.dialog}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h1 className={styles.formHeader}>Вход</h1>
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
              label="Пароль:"
              inputType="password"
              inputPlaceholder="Введите пароль"
              state={password}
              setState={setPassword}
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
        <img className={styles.illustration} src={illustration} alt="" />
      </div>
    </Modal>
  );
}

export default LoginPage;
