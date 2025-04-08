/** @format */

import React, { useEffect, useState } from "react";
import emotion1 from "../../assets/emotionheader.jpg";
import emotion2 from "../../assets/emotionheader_2.jpg";
import "./HeroSection.styles.css";
import Modal from "../Modal/Modal";
import { Variants, Transition, motion } from "framer-motion";

const HeroSection: React.FC = () => {
	type Slides = {
		url: string;
		title: string;
	};

	const slides: Slides[] = [
		{ url: emotion1, title: "Lächelnde Frau" },
		{ url: emotion2, title: "Junge und Hund" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onAnmeldenClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const pageVariants: Variants = {
		initial: { opacity: 0, y: 20 },
		in: { opacity: 1, y: 0 },
		out: { opacity: 0, y: -20 },
	};

	const pageTransition: Transition = {
		type: "tween",
		ease: "easeInOut",
		duration: 0.3,
	};

	// Falling text animation variants
	const fallingTextVariants: Variants = {
		initial: { y: -50, opacity: 0 },
		animate: (index: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: index * 0.1,
				type: "spring",
				stiffness: 100,
				damping: 25,
			},
		}),
	};

	// Split heading text into letters
	const headingText = "Lerne Fahren mit uns!";
	const headingLetters = [...headingText];

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
			className="hero-section relative h-screen w-full">
			<div
				className="relative inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out w-full h-full z-10"
				style={{
					backgroundImage: `url(${slides[currentIndex].url})`,
					backgroundPosition: "center",
					width: "100%",
					height: "100%",
					backgroundRepeat: "no-repeat",
				}}>
				<div className="hero-overlay"></div>
				<div className="inhalt-container">
					<h1 className="hero-heading">
						{headingLetters.map((letter, index) => (
							<motion.span
								key={index}
								variants={fallingTextVariants}
								initial="initial"
								animate="animate"
								custom={index}
								style={{
									display: "inline-block",
									fontSize: "3rem",
									fontWeight: "bold",
								}}>
								{letter === " " ? "\u00A0" : letter}
							</motion.span>
						))}
					</h1>
					<p className="hero-subtext">
						Schnell, sicher und mit Spaß zum Führerschein.
					</p>
					<button
						className="hero-button"
						onClick={onAnmeldenClick}>
						Jetzt zum Antragsformular
					</button>
				</div>

				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
				/>
			</div>
		</motion.div>
	);
};

export default HeroSection;
