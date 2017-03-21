import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render () {
		return (
			<div>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						<a className="navbar-brand" href="/">Title</a>
						<ul className="nav navbar-nav">
							<li><Link to="/" activeClassName="active">Home</Link></li>
							<li><Link to="/pageone" activeClassName="active">Page One</Link></li>
							<li><Link to="/pagetwo" activeClassName="active">Page Two</Link></li>
							<li><Link to="/pagethree" activeClassName="active">Page Three</Link></li>
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