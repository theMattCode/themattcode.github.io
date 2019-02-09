import React from "react";

const jss = {
	header: {
		borderBottom: "1px solid lightgray"
	},
	headerContent: {
		display: "flex",
		justifyContent: "space-between"
	},
	headerPara: {
		margin: "5px"
	},
	link: {
		textDecoration: "none",
		color: "black"
	}
};
export default () => (
	<header style={jss.header}>
		<div className="container">
			<div style={jss.headerContent}>
				<a style={jss.link} href="/">
					<p style={jss.headerPara}><span className="icon-embed2" /> <b>Matthäus Mayer</b></p>
				</a>
				<p style={jss.headerPara}></p>
				<p style={jss.headerPara}>
					<a style={jss.link} href="https://github.com/theMattCode" target="_blank">
						<span className="icon-github" />
					</a>
				</p>
			</div>
		</div>
	</header>
)