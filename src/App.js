import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import { action } from 'mobx';
// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
class App extends Component {
	render() {
		const { todos, myStr } = this.props.store;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{'Welcome to React ' + myStr}</h1>
				</header>
				{todos.map((e, idx) => (
					<p key={idx}>{e}</p>
				))}
				<button onClick={action('push', () => todos.push('xD'))}>xD</button>
				<button onClick={action('changeString', () => myStr.set('lol'))}>lol</button>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default observer(App);
