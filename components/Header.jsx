import React from "react";

const jss = {
	header: {
		borderBottom: "1px solid lightgray"
	},
	headerContent: {
		display: "flex",
		justifyContent: "space-between"
	},
	iconLink: {
		textDecoration: "none",
		color: "black",

	}
};
export default () => (
	<header style={jss.header}>
		<div className="container">
			<div style={jss.headerContent}>
				<p>Matthäus Mayer</p>
				<p>menu</p>
				<p>
					<a style={jss.iconLink} href="https://github.com/theMattCode" target="_blank">
						<span className="icon-github"/>
					</a>
				</p>
			</div>
		</div>
	</header>
)