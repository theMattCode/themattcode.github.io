import React, {Fragment} from "react";
import ReactMarkdown from "react-markdown";
import Head from "../components/Head/Head";
import About from "../content/index/about.md";

export default () => (
	<Fragment>
		<Head title="Matthäus Mayer"/>
		<ReactMarkdown source={About}/>
	</Fragment>
)
