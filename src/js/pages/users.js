import React from 'react';
import { Link } from 'react-router';

export default class Users extends React.Component {
	render () {
		return (
			<div>
				<ul className="user-list">
					<li><Link to="users/1">Micheal Jackson</Link></li>
					<li><Link to="users/2">Rojer Federrer</Link></li>
					<li><Link to="users/3">Rafaien Nadal</Link></li>
					<li><Link to="users/4">Lee Chong Wei</Link></li>
					<li><Link to="users/5">Jackie Chang</Link></li>
				</ul>
			</div>
		);
	}
}