/** @format */
import React from "react";
import { useState } from "react";
import Theorie from "../Theorie/Theorie";
import "./TheorieIntro.styles.css";
const TheorieIntro: React.FC = () => {
	const [isTheorieOpen, setTheorieOpen] = useState(false);

	const onTheorieClick = () => {
		setTheorieOpen(true);
	};

	const onTheorieClose = () => {
		setTheorieOpen(false);
	};
	return (
		<div>
			<div className="theorintro-container">
				<h3 className="inhalt-aufbauseminare">Theorie&Praxis Grundstoff</h3>
				<button
					className="theorie-button"
					onClick={onTheorieClick}>
					Mehr über Inhalte erfahren
				</button>
			</div>
			<Theorie
				isOpen={isTheorieOpen}
				onClose={onTheorieClose}
			/>
		</div>
	);
};

export default TheorieIntro;
