import React, { Component } from 'react';
import axios from 'axios';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import store from './stores/MainStore';

import Clock from './Components/Clock/Clock';
import TradeSaturdays from './Components/TradeSaturdays/TradeSaturdays';
import EvenOrOddWeek from './Components/EvenOrOddWeek/EvenOrOddWeek';
import CurrentDate from './Components/CurrentDate/CurrentDate';
import MainSection from './Components/MainSection/MainSection';
import Plan from './Components/Plan/Plan';
import Weather from './Components/Weather/Weather';
import Calendar from './Calendar';

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
import './theme/globalStyle';
import colors from './colors';
const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 10fr 10fr 30fr 10fr 10fr;
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
				runInAction(`fetch notes`, () => {
					store.notes = response.data;
					store.loading = false;
				});
			})
			.catch(error => {
				console.error(error);

				runInAction(`save error message`, () => {
					store.err = 'Błąd połączenia.';
				});
			});
	};
	render() {
		switch (store.page) {
			case 'Main':
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
			case 'Calendar':
				return <Calendar />;

			default:
				return <p>Wrong page!</p>;
		}
	}
}

export default observer(App);
