import React from "react";
import styles from "./LabelInput.module.scss";

function LabelInput({
	label,
	inputValue,
	onChange,
	onFocus,
	onBlur,
	inputType = "text",
	inputPlaceholder = "",
	gap = 5,
}) {
	return (
		<>
			<p className={styles.label} style={{ marginBottom: `${gap}px` }}>
				{label}
			</p>
			<input
				className={styles.input}
				type={inputType}
				placeholder={inputPlaceholder}
				value={inputValue}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</>
	);
}

export default LabelInput;
