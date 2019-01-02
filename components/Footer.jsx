import React from "react";

const styles = {
	footer: {
		maxWidth: "768px"
	},
	footerContent: {
		fontSize: "0.9rem"
	}
};

export default () => (
	<footer style={styles.footer}>
		<div style={styles.footerContent}>
			<p>
				&copy; {(new Date()).getFullYear()} &lt;/&gt; with ♥ by <b>Matthäus Mayer</b>
			</p>
		</div>

	</footer>
)