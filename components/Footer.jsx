import React from "react";

const jss = {
	footer: {
		borderTop: "1px solid lightgray"
	}
};

export default () => (
	<footer style={jss.footer}>
		<div className="container">
			<p>&copy; {(new Date()).getFullYear()} &lt;/&gt; with ♥ by <b>Matthäus Mayer</b></p>
		</div>
	</footer>
)