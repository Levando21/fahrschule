/** @format */

import React from "react";
const Theorie: React.FC = () => {
	return (
		<div className="theorie-container">
			<h2 className="theorie-title">Theorie und Praxis</h2>
			<h3 className="titel">Theoretischer Grundstoff</h3>
			<p className="absatz">
				Unsere Fahrlehrer unterrichten Sie in dem theoretischen Grundstoff, den
				jeder Fahrschüler lernen muss. Darüber hinaus erhalten Sie viele wertvolle
				Tipps und Informationen.
			</p>

			<p>Der theoretischer Grundstoff setzt sich zusammen aus:</p>

			<ol className="inhalt-theorie">
				<li className="inhalt-thorie-unit">Risikofaktor Mensch</li>
				<li className="inhalt-thorie-unit">Rechtliche Rahmenbedingungen</li>
				<li className="inhalt-thorie-unit">Grundregel, Verkehrszeichen</li>
				<li className="inhalt-thorie-unit">
					Straßenverkehrssystem und Bahnübergänge
				</li>
				<li className="inhalt-thorie-unit">Vorfahrt</li>
				<li className="inhalt-thorie-unit">Verkehrsregelungen</li>
				<li className="inhalt-thorie-unit">
					Teilnehmer am Straßenverkehr - Besonderheiten und Verhalten
				</li>
				<li className="inhalt-thorie-unit">
					Geschwindigkeit, Abstand und umweltschonende Fahrweise
				</li>
				<li className="inhalt-thorie-unit">
					Verkehrsbeobachtung und Verkehrsverhalten bei Fahrmanöver
				</li>
				<li className="inhalt-thorie-unit">Ruhender Verkehr</li>
				<li className="inhalt-thorie-unit">
					Verhalten in besonderen Situationen, Verstöße gegen Verkehrsvorschriften
				</li>
				<li className="inhalt-thorie-unit">Lebenslanges Lernen</li>
			</ol>

			<h3 className="titel">Praktischer Grundstoff</h3>

			<p className="absatz">
				Die praktische Fahrausbildung erfolgt nach dem Stufenplan der
				Bundesvereinigung der Fahrlehrerverbände. Auf der Ausbildungsdiagrammkarte
				bekommen Sie Auskunft über die einzelnen Ausbildungsschritte. Sie können so
				jederzeit Ihre persönlichen Leistungen erkennen und gezielt Probleme mit
				Ihrem Fahrlehrer beseitigen. Für diese Ausbildungsfahrten ist vom
				Gesetzgeber keine Anzahl vorgeschrieben.
			</p>

			<p className="untertitel">
				Für die Klassen B und A sind folgende Sonderfahrten vorgeschrieben:
			</p>
			<ul className="klass-list">
				<li className="prax-unit">
					5 Stunden à 45 Minuten auf Bundes- oder Landstraße
				</li>
				<li className="prax-unit">4 Stunden à 45 Minuten auf Autobahn</li>
				<li className="prax-unit">
					3 Stunden à 45 Minuten bei Dämmerung oder Dunkelheit
				</li>
			</ul>
			<p className="untertitel">
				Für die Klasse BE sind folgende Sonderfahrten vorgeschrieben:
			</p>
			<ul className="klass-list">
				<li className="prax-unit">
					3 Stunden à 45 Minuten auf Bundes- oder Landstraße
				</li>
				<li className="prax-unit">1 Stunde à 45 Minuten auf Autobahn</li>
				<li className="prax-unit">
					1 Stunden à 45 Minuten bei Dämmerung oder Dunkelheit
				</li>
			</ul>
		</div>
	);
};

export default Theorie;
