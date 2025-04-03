/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import Courses from "./components/Courses/Courses";
import Aufbauseminare from "./components/Aufbauseminare/Aufbauseminare";
import Theorie from "./components/Theorie/Theorie";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="container mt-20">
				<Routes>
					{/* Definiere die Routen für jede Seite */}
					<Route
						path="/"
						element={<HeroSection />}
					/>
					<Route
						path="/aufbauseminare"
						element={<Aufbauseminare />}
					/>
					<Route
						path="/theorieprax"
						element={<Theorie />}
					/>
					{/* Füge weitere Routen hinzu, z.B. für Preise, Kontakt etc. */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
