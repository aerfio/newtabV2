// eslint-disable
import React from 'react';
import './EvenOrOddWeek.css';
const EvenOrOddWeek = () => {
	const parity = getWeek() % 2 === 0;

	return (
		<div className={'even_or_odd_week-container'}>
			<h1>{`Jest ${parity ? '' : 'nie'}parzysty tydzień`}</h1>
		</div>
	);
};
export default EvenOrOddWeek;

const getWeek = function() {
	var date = new Date();
	date.setHours(0, 0, 0, 0);
	// Thursday in current week decides the year.
	date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
	// January 4 is always in week 1.
	var week1 = new Date(date.getFullYear(), 0, 4);
	// Adjust to Thursday in week 1 and count number of weeks from date to week1.
	return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};
