import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainLayout from './components/mainLayout';
import SearchLayout from './components/searchLayout';
import UserDetail from './components/userDetail';

import Users from './pages/users';
import Applicants from './pages/applicants';
import Home from './pages/home';

const frame = document.getElementById('root');

render((
  	<Router history={ hashHistory }>
  		<Route component={ MainLayout }>
    		<Route path="/" component={ Home } />
    		<Route path="users">
    			<Route component={ SearchLayout }>
    				<IndexRoute component={ Users } />
    			</Route>
    			<Route path=":userId" component={ UserDetail } />
    		</Route>
    		<Route path="applicants">
    			<Route component={ SearchLayout }>
    				<IndexRoute component={ Applicants } />
    			</Route>
    		</Route>
    	</Route>
  	</Router>
), frame);