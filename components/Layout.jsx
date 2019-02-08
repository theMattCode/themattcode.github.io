import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default (props) => (
	<Fragment>
		<Head title={props.title} />
		<Header />
		<main>
			<div className="container">
				<ReactMarkdown source={props.content} />
			</div>
		</main>
		<Footer />
	</Fragment>
)
