import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head/Head";
import About from "../content/index/about.md";

export default () => (
	<div className="container">
		<Head title="Matthäus Mayer"/>
		<style jsx>{`
			@media only screen and (min-width: 768px) {
				.container {
					margin: 0 auto;
					max-width: 768px;
				}
			}
		`}</style>
		<ReactMarkdown source={About}/>
	</div>
)
