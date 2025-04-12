/** @format */

import React from "react";
import "./Footer.styles.css"; // Hier kannst du deinen eigenen CSS-Stil für den Footer verwenden

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-left">
					<a href="/druckversion">Druckversion</a> | <a href="/sitemap">Sitemap</a>
				</div>
				<div className="footer-middle">
					<a href="/login">Login</a>
				</div>
				<div className="footer-right">
					<p>© Fahrschule Höhnisch</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
