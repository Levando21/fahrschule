/** @format */

import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className="navigation">
			<div className="container">
				{/* Burger Icon for mobile */}
				<div
					className="burger"
					onClick={toggleMenu}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</div>

				{/* Navigation Options */}
				<ul className={`options ${menuOpen ? "open" : ""}`}>
					<li>
						<a
							href="/"
							className="offers"
							onClick={closeMenu}>
							Startseite
						</a>
					</li>

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
							<ul className="list">
								<li className="option-leistung">
									<Link
										to="/fuhrscheinklas"
										onClick={closeMenu}>
										Führerscheinklassen
									</Link>
								</li>
								<li className="option-leistung">
									<Link
										to="/theoriepraxintro"
										onClick={closeMenu}>
										Theorie & Praxis
									</Link>
								</li>
								<li className="option-leistung">
									<Link
										to="/aufbauseminare"
										onClick={closeMenu}>
										Aufbauseminare
									</Link>
								</li>
							</ul>
						)}
					</li>

					<li>
						<a
							href="/preise"
							className="offers"
							onClick={closeMenu}>
							Preise
						</a>
					</li>
					<li>
						<a
							href="/aktuell"
							className="offers"
							onClick={closeMenu}>
							Aktuelles
						</a>
					</li>
					<li>
						<a
							href="/kontakt"
							className="offers"
							onClick={closeMenu}>
							Kontakt
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
