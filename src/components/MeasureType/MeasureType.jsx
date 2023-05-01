import React from "react";

import styles from "./MeasureType.module.scss";

import editIcon from "../../assets/images/measureEdit.svg";

function MeasureType({ name = "", value, types = [], edit, state, setState }) {
	const Name = name[0].toUpperCase() + name.slice(1);
	const subName =
		name.slice(name.length - 2) === "ия" ? name.slice(0, -2) + "ию" : name;

	return (
		<div className={styles.wrap}>
			<div className={styles.measure}>
				<span className={styles.measureName}>{Name}:</span>
				<span>{value}</span>
				{edit ? (
					<img
						className={styles.measureEdit}
						src={editIcon}
						alt="edit"
					/>
				) : null}
			</div>
			<div className={styles.measureType}>
				<span>Измерять {subName} в:</span>
				<div className={styles.measureTypes}>
					{types.map(({ type, value }, index) => (
						<div key={index}>
							<input
								type="radio"
								id={type}
								value={value}
								checked={state === value}
								onChange={(e) => {
									setState(e.target.value);
								}}
							/>
							<label htmlFor={type}>{type}</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MeasureType;
