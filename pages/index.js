import React, {Fragment} from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./index/about.md";

export default () => (
	<Fragment>
		<Head title="Matthäus Mayer"/>
		<Header/>
		<main>
			<ReactMarkdown source={About}/>
		</main>
		<Footer/>
	</Fragment>
)
