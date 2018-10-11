import React from 'react';
import styled from 'styled-components';
import colors from './../../colors';
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
	padding: 0 0 0 0;
`;
const Header = styled.h1`
	color: ${colors.text_color};
	font-family: 'Noto Serif', serif;
	font-size: 3em;
`;
const CurrentDate = () => {
	const today = new Date();
	const text = today.getDate() + ' ' + monthsInPolish[today.getMonth()];
	return (
		<DateContainer>
			<Header>{text}</Header>
		</DateContainer>
	);
};

export default CurrentDate;
