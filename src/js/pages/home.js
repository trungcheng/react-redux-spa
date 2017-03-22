import React from 'react';

export default class Home extends React.Component {
	render () {
		return (
			<div className="home-page">
				<h2>The React Single Page Application</h2>
				<p>
					Here is the React Single Page Application tutorial<br />
					For a better understanding of those detail, see the 
					<a href="https://github.com/trungcheng/react-spa"> Github Repository</a>
				</p>
				<p>
					As far as the [Search Title] and [Total Result] that you will see on the
					result page, those are static for now. We will make them dynamic in the
					third guide.
				</p>
			</div>
		);
	}
}