import React from 'react'
import NextHead from 'next/head'

class Head extends React.Component {
	render() {
		return (
			<NextHead>
				<title>{this.props.title}</title>
				<meta charSet='utf-8'/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			</NextHead>
		)
	}
}

export default Head