import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
	render () {
		return (
			<div>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						<a className="navbar-brand" href="/">Title</a>
						<ul className="nav navbar-nav">
							<li><Link to="/" activeClassName="active">Home</Link></li>
							<li><Link to="/users" activeClassName="active">Users</Link></li>
							<li><Link to="/applicants" activeClassName="active">Applicants</Link></li>
						</ul>
					</div>
				</nav>
				<main>
		          	{this.props.children}
		        </main>
			</div>
		);
	}
}