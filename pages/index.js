import React, {Fragment} from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head";
import Footer from "../components/Footer";
import About from "./index/about.md";

export default () => (
	<Fragment>
		<Head title="Matthäus Mayer"/>
		<main>
			<ReactMarkdown source={About}/>
		</main>
		<Footer/>
	</Fragment>
)
