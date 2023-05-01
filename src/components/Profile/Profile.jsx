import React, { useState } from "react";
import MeasureType from "../MeasureType/MeasureType";
import LabelInput from "../LabelInput/LabelInput";
import Button from "../Button/Button";

import styles from "./Profile.module.scss";

function Profile() {
	const [heighMeasure, setHeighMeasure] = useState("0");
	const [weightMeasure, setWeightMeasure] = useState("0");
	const [distaneMeasure, setDistaneMeasure] = useState("0");

	return (
		<div className={styles.wrap}>
			<div>
				<div>
					<span>Email:</span>
					<span>test.test123@gmail.com</span>
				</div>
				<span>Подтверждён</span>
			</div>
			<MeasureType
				name="рост"
				value="187"
				edit
				types={[
					{ type: "M", value: "0" },
					{ type: "Ft", value: "1" },
				]}
				state={heighMeasure}
				setState={setHeighMeasure}
			/>
			<MeasureType
				name="вес"
				value="68"
				edit
				types={[
					{ type: "Kg", value: "0" },
					{ type: "Lb", value: "1" },
				]}
				state={weightMeasure}
				setState={setWeightMeasure}
			/>
			<MeasureType
				name="дистанция"
				types={[
					{ type: "Km", value: "0" },
					{ type: "Miles", value: "1" },
				]}
				state={distaneMeasure}
				setState={setDistaneMeasure}
			/>
			<LabelInput
				label="Старый пароль:"
				inputType="password"
				inputPlaceholder="Введите старый пароль"
				gap="8"
			/>
			<LabelInput
				label="Новый пароль:"
				inputType="password"
				inputPlaceholder="Введите новый пароль"
				gap="8"
			/>
			<Button text="Сохранить" />
		</div>
	);
}

export default Profile;
