import React, { Children } from "react";
import styles from "./Modal.module.scss";

function Modal({ dialogClassName = "", contentClassName = "", children }) {
	return (
		<div className={styles.modal}>
			<div className={`${styles.modalDialog} ${dialogClassName}`}>
				<div className={`${styles.modalContent} ${contentClassName}`}>
					{children}
				</div>
			</div>
		</div>
	);
}

export default Modal;
