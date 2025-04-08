/** @format */

import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	// Zustand, um zu prüfen, ob das Dropdown-Menü angezeigt wird
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Funktion, um das Dropdown anzuzeigen oder zu verstecken
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<nav className="navigation">
			<div className="container">
				{/* Navigations-Links */}
				<ul className="options">
					<li>
						<a
							href="/"
							className="offers">
							Startseite
						</a>
					</li>

					{/* Dropdown-Menü für "Leistungen" */}
					<li
						className="relative"
						onMouseEnter={toggleDropdown}
						onMouseLeave={toggleDropdown}>
						<a
							href="#"
							className="offers">
							Leistungen
						</a>
						{isDropdownOpen && (
							<ul className="list absolute bg-blue-700 text-white w-36 mt-2 rounded-md shadow-lg left-1/2 transform -translate-x-1/2 text-center">
								<li className="option-leistung">
									<Link
										to="/fuhrscheinklas"
										className="fuhr-option">
										Führerscheinklassen
									</Link>
								</li>
								<li className="option-leistung">
									<Link
										to="/theorieprax"
										className="theorie-option">
										Theorie & Praxis
									</Link>
								</li>

								<li className="option-leistung">
									<Link
										to="/aufbauseminare"
										className="aufbau-option">
										Aufbauseminare
									</Link>
								</li>
							</ul>
						)}
					</li>

					{/* Weitere Links */}
					<li>
						<a
							href="/preise"
							className="offers">
							Preise
						</a>
					</li>
					<li>
						<a
							href="/aktuell"
							className="offers">
							Aktuelles
						</a>
					</li>
					<li>
						<a
							href="/kontakt"
							className="offers">
							Kontakt
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
