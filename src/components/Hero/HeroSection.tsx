/** @format */

import React, { useEffect, useState, useMemo } from "react";

import "./HeroSection.styles.css";
import Modal from "../Modal/Modal";
import { Variants, Transition, motion, AnimatePresence } from "framer-motion";

const HeroSection: React.FC = () => {
	type Slides = {
		url: string;
		title: string;
	};

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 375);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const allImages = [
			"https://res.cloudinary.com/dnrypbyww/image/upload/v1744574805/emotion1_hvilh6.png",
			"https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion2_hmg3da.png",
			"https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion3_emircs.png",
			"https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion4_jyzoju.png",
			"https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion5_odgevb.png",
		];

		allImages.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, []);

	const slides: Slides[] = useMemo(() => {
		return [
			{
				url: "https://res.cloudinary.com/dnrypbyww/image/upload/v1744574805/emotion1_hvilh6.png",
				title: "Lächelnde Frau",
			},
			{
				url: "https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion2_hmg3da.png",
				title: "Junge und Hund",
			},
			{
				url: "https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion3_emircs.png",
				title: "Junge und Hund",
			},
			{
				url: "https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion4_jyzoju.png",
				title: "Motofahrer",
			},
			{
				url: "https://res.cloudinary.com/dnrypbyww/image/upload/v1744574806/emotion5_odgevb.png",
				title: "Paar mit Führerschein",
			},
		];
	}, []);

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

	const headingText = "Lerne Fahren mit uns!";
	const headingLetters = [...headingText];

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
			className="hero-section relative h-screen w-full overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={slides[currentIndex].url}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8 }}
					className="slide-back"
					style={{
						backgroundImage: `url(${slides[currentIndex].url})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
			</AnimatePresence>

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
		</motion.div>
	);
};

export default HeroSection;
