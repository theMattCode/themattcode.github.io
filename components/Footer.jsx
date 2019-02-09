import React from "react";

const jss = {
	footer: {
		borderTop: "1px solid lightgray",
		fontSize: "0.9rem",
		color: "black",
	},
	footerContent: {
		display: "flex",
		justifyContent: "space-between"
	},
	link: {
		textDecoration: "none"
	},
	p: {
		margin: "5px"
	}
};

export default () => (
	<footer style={jss.footer}>
		<div className="container">
			<div style={jss.footerContent}>
				<p style={jss.p}>
					&copy; {(new Date()).getFullYear()} <span className="icon-embed2" /> with ♥ by <b>Matthäus Mayer</b>
				</p>
				<p style={jss.p}>
					<a style={jss.link} href="/impressum">Impressum &amp; Datenschutz</a>
				</p>
			</div>
		</div>
	</footer>
)