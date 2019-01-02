import React, {Fragment} from 'react'
import NextHead from 'next/head'

export default (props) => (
	<Fragment>
		<style jsx global>{`
			body {
				font-family: 'Roboto', sans-serif;
				font-size: 1.15rem;
				margin: 0;
				line-height: 1.6rem;
			}
			.container {
				max-width: 768px;
				display: flex;
				flex-direction: column;
				margin: 0 auto;
			}
		`}</style>
		<NextHead>
			<title>{props.title}</title>
			<meta charSet='utf-8'/>
			<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300'/>
			<link rel='stylesheet' href='/static/icons.css'/>
		</NextHead>
	</Fragment>
)
