/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";

import Aufbauseminare from "./components/Aufbauseminare/Aufbauseminare";
import Theorie from "./components/Theorie/Theorie";
import Fuhrscheinklasse from "./components/Fuhrscheinklasse/Fuhrscheinklasse";
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
					<Route
						path="/fuhrscheinklas"
						element={<Fuhrscheinklasse />}
					/>
					{/* Füge weitere Routen hinzu, z.B. für Preise, Kontakt etc. */}
				</Routes>
			</div>
		</Router>
	);
}
export default App;
