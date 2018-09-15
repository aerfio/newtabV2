import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';

class App extends Component {
	render() {
		const { todos, todoCount, todoChange } = this.props.store;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				{todos.map(e => (
					<p>{e}</p>
				))}
				<button onClick={() => todos.push('xD')}>xD</button>
				<button onClick={() => console.log(todoCount)}>lol</button>
				<button onClick={() => todoChange()}>damn</button>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default observer(App);
