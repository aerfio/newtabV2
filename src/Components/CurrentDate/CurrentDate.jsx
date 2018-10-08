import React from 'react';
import styled from 'styled-components';
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
const DateContainer = styled.div`
	grid-area: date;
	text-align: center;
	color: white;
`;

const CurrentDate = () => {
	const today = new Date();
	const text = today.getDate() + ' ' + monthsInPolish[today.getMonth()];
	return (
		<DateContainer>
			<h1>{text}</h1>
		</DateContainer>
	);
};

export default CurrentDate;
