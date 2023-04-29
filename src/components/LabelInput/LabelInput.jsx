import React from "react";
import styles from "./LabelInput.module.scss";

function LabelInput({
	label,
	inputType = "text",
	inputPlaceholder = "",
	gap = 5,
}) {
	return (
		<>
			<p className={styles.label} style={{ "marginBottom": `${gap}px` }}>
				{label}
			</p>
			<input
				type={inputType}
				placeholder={inputPlaceholder}
			/>
		</>
	);
}

export default LabelInput;
