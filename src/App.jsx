import React, { Component } from 'react';
import axios from 'axios';
import { runInAction } from 'mobx';
import Clock from './Components/Clock/Clock';
import TradeSaturdays from './Components/TradeSaturdays/TradeSaturdays';
import EvenOrOddWeek from './Components/EvenOrOddWeek/EvenOrOddWeek';
import CurrentDate from './Components/CurrentDate/CurrentDate';
import MainSection from './Components/MainSection/MainSection';
import Plan from './Components/Plan/Plan';
import Weather from './Components/Weather/Weather';
import styled from 'styled-components';

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
import './theme/globalStyle';
import colors from './colors';
const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 10fr 10fr 24fr 10fr 10fr;
	//grid-template-rows: 25% 100px auto;
	grid-template-rows: 1fr 1fr 6fr;
	grid-template-areas:
		'weather    weather    date      saturday       saturday'
		'weather    weather    clock     even_or_odd    even_or_odd'
		'weather    weather    mainSection    .              .';
	height: 100vh;
	background-color: ${colors.primary};
`;

class App extends Component {
	componentDidMount = () => {
		axios
			.get('http://localhost:3000/getNotes')
			.then(response => {
				const { store } = this.props;
				runInAction(`fetch notes`, () => {
					store.notes = response.data;
					store.loading = false;
				});
			})
			.catch(error => {
				console.error(error);
				const { store } = this.props;
				runInAction(`save error message`, () => {
					store.err = 'Błąd połączenia.';
				});
			});
	};
	render() {
		return (
			<AppWrapper>
				<Clock />
				<TradeSaturdays />
				<CurrentDate />
				<Plan />
				<Weather />
				<EvenOrOddWeek />
				<MainSection />
			</AppWrapper>
		);
	}
}

export default App;
