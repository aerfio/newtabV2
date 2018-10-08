import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { runInAction } from 'mobx';
import Clock from './Components/Clock/Clock';
import TradeSaturdays from './Components/TradeSaturdays/TradeSaturdays';
import EvenOrOddWeek from './Components/EvenOrOddWeek/EvenOrOddWeek';
import CurrentDate from './Components/CurrentDate/CurrentDate';
import MainSection from './Components/MainSection/MainSection';
import Plan from './Components/Plan/Plan';
import Weather from './Components/Weather/Weather';
// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }

class App extends Component {
	componentDidMount = () => {
		
			this.props.store &&
			this.props.store.notes &&
			axios
				.get('http://localhost:3000/getNotes')
				.then(function(response) {
					runInAction(`fetch notes`, () => {
						console.log(this.props);
						this.props.store.notes = response.data;
					});
				})
				.catch(function(error) {
					console.log(error);
				});
	};
	render() {
		return (
			<div className="App">
				<Clock />
				<TradeSaturdays />
				<CurrentDate />
				<Plan />
				<Weather />
				<EvenOrOddWeek />
				<MainSection />
			</div>
		);
	}
}

export default App;
