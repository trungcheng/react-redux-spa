import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Header from './components/header';
import Footer from './components/footer';

import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';
import Home from './pages/home';
import PageThree from './pages/pageThree';

const frame = document.getElementById('root');

render((
  	<Router history={ hashHistory }>
  		<Route component={ Header }>
    		<Route path="/" component={ Home } />
    		<Route path="pageone" component={ PageOne } />
    		<Route path="pagetwo" component={ PageTwo } />
    		<Route path="pagethree" component={ PageThree } />
    	</Route>
  	</Router>
), frame);