/** @format */

import React from "react";
import "./HeroSection.styles.css";

const HeroSection: React.FC = () => {
	return (
		<div
			className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
			style={{
				backgroundImage:
					"url(https://media1.giphy.com/media/l0HlKQPTHOGNUPTZm/200w.gif?cid=6c09b95201r3bspxo4ys8e22p196x4hjx5or21wd0qngn1mu&ep=v1_gifs_search&rid=200w.gif&ct=g",
			}}>
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
