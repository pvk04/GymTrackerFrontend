import React from "react";
import styles from "./LabelInput.module.scss";

function LabelInput({
	label,
	labelClassName = "",
	inputType = "text",
	inputPlaceholder = "",
	gap = 5,
	inputClassName = "",
	state,
	setState,
	...rest
}) {
	return (
		<>
			<p className={`${styles.label} ${labelClassName}`} style={{ marginBottom: `${gap}px` }}>
				{label}
			</p>
			<input
				className={`${styles.input} ${inputClassName}`}
				type={inputType}
				placeholder={inputPlaceholder}
				value={state}
				onChange={(e) => {
					setState(e.target.value);
				}}
				{...rest}
			/>
		</>
	);
}

export default LabelInput;
