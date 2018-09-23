import React from 'react';
import './CurrentDate.css';
const monthsInPolish = [
	'stycznia',
	'lutego',
	'marca',
	'kwietnia',
	'maja',
	'czerwca',
	'lipca',
	'sierpnia',
	'września',
	'października',
	'listopada',
	'grudnia',
];
const CurrentDate = () => {
	const today = new Date();
	const text = today.getDate() + ' ' + monthsInPolish[today.getMonth()];
	return (
		<div className={'currentdate-container'}>
			<h1>{text}</h1>
		</div>
	);
};

export default CurrentDate;
