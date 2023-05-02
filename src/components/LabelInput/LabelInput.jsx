import React from "react";
import styles from "./LabelInput.module.scss";

function LabelInput({
	label,
	onFocus,
	onBlur,
	inputType = "text",
	inputPlaceholder = "",
	gap = 5,
	state,
	setState,
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
				value={state}
				onChange={(e) => {
					setState(e.target.value);
				}}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</>
	);
}

export default LabelInput;
