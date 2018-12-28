import React from "react"
import Head from "next/head"

class Index extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Matthäus Mayer</title>
					<meta charSet='utf-8'/>
					<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
				</Head>
				<div>Welcome</div>
			</div>
		)
	}
}

export default Index