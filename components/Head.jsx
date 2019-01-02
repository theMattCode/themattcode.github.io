import React, {Fragment} from 'react'
import NextHead from 'next/head'
import PropTypes from 'prop-types'

class Head extends React.Component {
	render() {
		return (
			<Fragment>
				<style jsx global>{`
					body {
						font-family: 'Roboto', sans-serif;
						font-size: 1.15rem;
						margin: 15px;
					}
					main {
						min-height: 100px;
						max-width: 768px;
						flex: 1;
					}
					div#__next {
						display: flex;
						margin: 0 auto;
						min-height: 100vh;
						flex-direction: column;
						align-items: center;
					}
					p {
						line-height: 1.6rem;
					}
				`}</style>
				<NextHead>
					<title>{this.props.title}</title>
					<meta charSet='utf-8'/>
					<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
					<link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet'/>
				</NextHead>
			</Fragment>
		)
	}
}

Head.propTypes = {
	title: PropTypes.string
};

export default Head