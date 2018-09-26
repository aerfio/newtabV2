import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Clock from './Components/Clock/Clock';
import TradeSaturdays from './Components/TradeSaturdays/TradeSaturdays';
import EvenOrOddWeek from './Components/EvenOrOddWeek/EvenOrOddWeek';
import CurrentDate from './Components/CurrentDate/CurrentDate';
import Searchbar from './Components/Searchbar/Searchbar';
import Plan from './Components/Plan/Plan';
import Weather from './Components/Weather/Weather';
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
				<Weather />
				<EvenOrOddWeek />
			</div>
		);
	}
}

export default observer(App);
