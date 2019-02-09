import React, { Fragment } from 'react'
import NextHead from 'next/head'

export default (props) => (
	<Fragment>
		<style jsx global>{`
			body {
				font-family: 'Roboto', sans-serif;
				font-size: 1rem;
				margin: 0;
				line-height: 1.6rem;
			}
			.container {
				max-width: 768px;
				display: flex;
				flex-direction: column;
				padding: 8px;
				margin: 0 auto;
			}
			h1 {
				margin-block-end: 0.4em;
			}
			h2 {
				margin-block-end: 0.2em;
			}
			p {
				margin-block-start: 0.6em;
				margin-block-end: 0.6em;
			}
			ul {
				margin-block-start: 0.2em;
				margin-block-end: 0.2em;
			}
			li {
			 	font-size: 1rem;
			}
		`}</style>
		<NextHead>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132344829-1" />
			<script src="/static/ga.js" />

			<title>{props.title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300' />
			<link rel='stylesheet' href='/static/icons.css' />
		</NextHead>
	</Fragment>
)
