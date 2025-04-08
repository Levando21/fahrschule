/** @format */

import React from "react";
import "./Modal.styles.css"; // Import the custom CSS file

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null; // Don't render the modal if it's not open

	return (
		<div
			className="modal-overlay"
			onClick={onClose}>
			<div
				className="modal-container"
				onClick={(e) => e.stopPropagation()}>
				<button
					className="close-button"
					onClick={onClose}>
					X
				</button>
				<div className="modal-content">
					<h2>Modal Title</h2>
					<p>This is some content inside the modal!</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
