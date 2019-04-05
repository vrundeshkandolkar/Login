import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './components/login/login';
import Home from './components/home/home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/home/" component={Home} />
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
