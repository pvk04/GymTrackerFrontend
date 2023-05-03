import React from "react";

import styles from "./Button.module.scss";

function Button({ text = "", variant = "primary", ...rest }) {
	console.log(styles["primary"]);
	return (
		<button className={`${styles.button} ${styles[variant]}`} {...rest}>
			{text}
		</button>
	);
}

export default Button;
