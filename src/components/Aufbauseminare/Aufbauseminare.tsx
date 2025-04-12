/** @format */

import React from "react";
import "./Aufbauseminare.styles.css";

const Aufbauseminare: React.FC = () => {
	return (
		<div>
			<div className="aufbauseminare-container">
				<h3 className="inhalt-aufbauseminare">ASF-Seminare</h3>
				<p className="absatz-aufbauseminare">
					Wer innerhalb der Probezeit bei bestimmten Verkehrsverstößen erwischt wird,
					den fordert die Straßenverkehrsbehörde zur Teilnahme an einem Aufbauseminar
					auf. Dazu wird eine bestimmte Frist gesetzt. Wer bis dahin dem Amt keine
					Teilnahmebescheinigung vorlegen kann, muss seinen Führerschein solange
					abgeben, bis er eine Teilnahmebescheinigung nachreicht. Die Dauer der
					Probezeit beträgt zwei Jahre. Bei Anordnung eines Aufbauseminars verlängert
					sich die Probezeit um zwei Jahre. Aufbauseminare finden in speziellen
					Gruppen in Fahrschulen statt. Mit theoretischem Unterricht hat das aber
					nichts zu tun. Ein Kurs besteht aus vier Kurssitzungen zu je 135 Minuten
					und einer Fahrprobe, die 30 Minuten pro Person dauert (in einer Gruppe von
					mehreren Fahrern). Es besteht Anwesenheitspflicht bei allen Kursteilen.
					Eine Prüfung findet nicht statt. Wer vollständig an allen Kurssitzungen
					teilgenommen hat, erhält zum Abschluss eine Teilnahmebescheinigung. Diese
					muss wiederum der Behörde rechtzeitig vor Ablauf der Frist (also am besten
					unverzüglich) vorgelegt werden, damit sichergestellt ist, dass man den
					Führerschein behalten darf.
				</p>
			</div>
		</div>
	);
};

export default Aufbauseminare;
