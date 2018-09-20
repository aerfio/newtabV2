import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Clock from './Components/Clock/Clock';
// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
class App extends Component {
	render() {
		return (
			<div className="App">
				<Clock />
			</div>
		);
	}
}

export default observer(App);
