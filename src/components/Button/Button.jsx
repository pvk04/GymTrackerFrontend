import React from "react";

import styles from "./Button.module.scss";

function Button({ text = "", ...rest }) {
	return <button className={styles.button} {...rest} >{text}</button>;
}

export default Button;
