import React from 'react';

export default class UserDetail extends React.Component {
	render () {
		return (
			<div>
				<h2>User Detail ID: {this.props.params.userId}</h2>
			</div>
		);
	}
}