/** @format */

import React from "react";
import "./Theorie.styles.css";
import "../Modal/Modal.styles.css";
import { motion } from "framer-motion";

interface TheorieProps {
	isOpen: boolean;
	onClose: () => void;
}

const Theorie: React.FC<TheorieProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	// Animation variants for the text
	const textVariants = {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeInOut" },
		},
	};

	return (
		<div
			className="modal-overlay"
			onClick={onClose}>
			<div
				className="modal-container"
				onClick={(e) => e.stopPropagation()}>
				<button
					className="close-button"
					onClick={onClose}>
					X
				</button>

				<div className="theorie-container">
					<motion.div
						className="inhalt-theorie"
						initial="initial"
						animate="animate"
						variants={textVariants}>
						<h2>Theoretischer Grundstoff</h2>
						<p className="absatz">
							Unsere Fahrlehrer unterrichten Sie in dem theoretischen Grundstoff, den
							jeder Fahrschüler lernen muss. Darüber hinaus erhalten Sie viele
							wertvolle Tipps und Informationen.
						</p>

						<h3 className="untertitel">
							Der theoretische Grundstoff setzt sich zusammen aus:
						</h3>
						<ul className="klass-list">
							<li>Risikofaktor Mensch</li>
							<li>Rechtliche Rahmenbedingungen</li>
							<li>Grundregel, Verkehrszeichen</li>
							<li>Straßenverkehrssystem und Bahnübergänge</li>
							<li>Vorfahrt</li>
							<li>Verkehrsregelungen</li>
							<li>Teilnehmer am Straßenverkehr - Besonderheiten und Verhalten</li>
							<li>Geschwindigkeit, Abstand und umweltschonende Fahrweise</li>
							<li>Verkehrsbeobachtung und Verkehrsverhalten bei Fahrmanöver</li>
							<li>Ruhender Verkehr</li>
							<li>
								Verhalten in besonderen Situationen, Verstöße gegen Verkehrsvorschriften
							</li>
							<li>Lebenslanges Lernen</li>
						</ul>

						<div className="prax-unit">
							<h3 className="untertitel">Praktischer Grundstoff</h3>
							<p className="absatz">
								Die praktische Fahrausbildung erfolgt nach dem Stufenplan der
								Bundesvereinigung der Fahrlehrerverbände. Auf der
								Ausbildungsdiagrammkarte bekommen Sie Auskunft über die einzelnen
								Ausbildungsschritte.
							</p>
							<p className="absatz">
								Für diese Ausbildungsfahrten ist vom Gesetzgeber keine Anzahl
								vorgeschrieben.
							</p>

							<h4 className="untertitel">
								Für die Klassen B und A sind folgende Sonderfahrten vorgeschrieben:
							</h4>
							<ul className="klass-list">
								<li>5 Stunden à 45 Minuten auf Bundes- oder Landstraße</li>
								<li>4 Stunden à 45 Minuten auf Autobahn</li>
								<li>3 Stunden à 45 Minuten bei Dämmerung oder Dunkelheit</li>
							</ul>

							<h4 className="untertitel">
								Für die Klasse BE sind folgende Sonderfahrten vorgeschrieben:
							</h4>
							<ul className="klass-list">
								<li>3 Stunden à 45 Minuten auf Bundes- oder Landstraße</li>
								<li>1 Stunde à 45 Minuten auf Autobahn</li>
								<li>1 Stunde à 45 Minuten bei Dämmerung oder Dunkelheit</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Theorie;
