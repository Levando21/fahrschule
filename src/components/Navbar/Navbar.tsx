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
		<nav className="bg-blue-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				{/* Navigations-Links */}
				<ul className="flex space-x-8">
					<li>
						<a
							href="/"
							className="hover:text-yellow-400">
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
							className="hover:text-yellow-400">
							Leistungen
						</a>
						{isDropdownOpen && (
							<ul className="absolute bg-blue-700 text-white w-48 mt-2 rounded-md shadow-lg">
								<li>
									<Link
										to="/fuhrscheinklas"
										className="block px-4 py-2 hover:bg-blue-600">
										Führerscheinklassen
									</Link>
								</li>
								<li>
									<Link
										to="/theorieprax"
										className="block px-4 py-2 hover:bg-blue-600">
										Theorie & Praxis
									</Link>
								</li>

								<li>
									<Link
										to="/aufbauseminare"
										className="block px-4 py-2 hover:bg-blue-600">
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
							className="hover:text-yellow-400">
							Preise
						</a>
					</li>
					<li>
						<a
							href="/aktuell"
							className="hover:text-yellow-400">
							Aktuelles
						</a>
					</li>
					<li>
						<a
							href="/kontakt"
							className="hover:text-yellow-400">
							Kontakt
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
