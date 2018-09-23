import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Clock from './Components/Clock/Clock';
import TradeSaturdays from './Components/TradeSaturdays/TradeSaturdays';
import CurrentDate from './Components/CurrentDate/CurrentDate';
import Searchbar from './Components/Searchbar/Searchbar';
import Plan from './Components/Plan/Plan';
// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
class App extends Component {
	render() {
		return (
			<div className="App">
				<Clock />
				<TradeSaturdays />
				<CurrentDate />
				<Searchbar />
				<Plan />
				<div className={'xd3'}>xD3</div>
			</div>
		);
	}
}

export default observer(App);
