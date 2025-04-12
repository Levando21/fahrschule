/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import Aufbauseminare from "./components/Aufbauseminare/Aufbauseminare";
import TheorieIntro from "./components/TheorieIntro/TheorieIntro";
import Fuhrscheinklasse from "./components/Fuhrscheinklasse/Fuhrscheinklasse";
import Footer from "./components/Footer/Footer";

function App() {
	const location = useLocation();
	const hideFooterRoutes = ["/"];
	const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<HeroSection />}
				/>
				<Route
					path="/aufbauseminare"
					element={<Aufbauseminare />}
				/>
				<Route
					path="/theoriepraxintro"
					element={<TheorieIntro />}
				/>
				<Route
					path="/fuhrscheinklas"
					element={<Fuhrscheinklasse />}
				/>
			</Routes>
			{shouldShowFooter && <Footer />}
		</>
	);
}

export default App;
