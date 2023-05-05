import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MeasureType from "../MeasureType/MeasureType";
import LabelInput from "../LabelInput/LabelInput";
import Button from "../Button/Button";

import styles from "./Profile.module.scss";

function Profile() {
	const {
		email,
		emailActivated,
		height,
		heightMeasure,
		weight,
		weightMeasure,
		distanceMeasure 
	} = useSelector(({user}) => user);

	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [heightRadio, setHeightRadio] = useState(heightMeasure);
	const [weightRadio, setWeightRadio] = useState(weightMeasure);
	const [distanceRadio, setDistaneRadio] = useState(distanceMeasure);

	return (
		<div className={styles.wrap}>
			<div className={styles.element}>
				<div className={styles.elementHeader}>
					<span className={styles.elementTitle}>Email: </span>
					<span>{email}</span>
				</div>
				<span className={emailActivated ? styles.confirmedTrue : styles.confirmedFalse}>{emailActivated ? "Подтверждён" : "Не подтвержден"}</span>
			</div>
			<MeasureType
				className={styles.element}
				name="рост"
				value={height}
				edit
				types={[
					{ type: "M", value: "0" },
					{ type: "Ft", value: "1" },
				]}
				state={heightRadio}
				setState={setHeightRadio}
			/>
			<MeasureType
				name="вес"
				value={weight}
				edit
				types={[
					{ type: "Kg", value: "0" },
					{ type: "Lb", value: "1" },
				]}
				state={weightRadio}
				setState={setWeightRadio}
			/>
			<MeasureType
				name="дистанция"
				types={[
					{ type: "Km", value: "0" },
					{ type: "Miles", value: "1" },
				]}
				state={distanceRadio}
				setState={setDistaneRadio}
			/>
			<LabelInput
				label="Старый пароль:"
				labelClassName={styles.passwordLabel}
				inputType="password"
				inputPlaceholder="Введите старый пароль"
				inputClassName={styles.password}
				gap="10"
				state={oldPassword}
				setState={setOldPassword}
			/>
			<LabelInput
				label="Новый пароль:"
				labelClassName={styles.passwordLabel}
				inputType="password"
				inputPlaceholder="Введите новый пароль"
				inputClassName={styles.password}
				gap="10"
				state={newPassword}
				setState={setNewPassword}
			/>
			<div className={styles.button}>
				<Button text="Сохранить" variant="success" />
			</div>
		</div>
	);
}

export default Profile;
