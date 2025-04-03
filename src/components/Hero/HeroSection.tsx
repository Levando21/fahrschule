/** @format */

import React from "react";

const HeroSection: React.FC = () => {
	return (
		<div
			className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
			style={{ backgroundImage: "url('/hero-image.jpg')" }}>
			<h1 className="text-4xl font-bold">Lerne Fahren mit uns!</h1>
			<p className="text-lg mt-2">
				Schnell, sicher und mit Spaß zum Führerschein.
			</p>
			<button className="mt-4 bg-blue-500 px-6 py-2 rounded text-white">
				Jetzt Anmelden
			</button>
		</div>
	);
};

export default HeroSection;
