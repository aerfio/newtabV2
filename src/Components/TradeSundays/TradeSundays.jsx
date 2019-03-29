import React, { Component } from "react";
import styled from "styled-components";
import colors from "../../colors";
const listOfSundays = require("./listOfSundays.js");
const MS_PER_DAY = 1000 * 60 * 60 * 24;
export class TradeSundays extends Component {
	dateDiffInDays = (a, b) => {
		// Discard the time and time-zone information.
		const firstDate = a.getTime();
		const secondDate = b.getTime();
		return (secondDate - firstDate) / MS_PER_DAY;
	};
	isTradeSunday = () => {
		let isInList = true;
		let today = new Date();

		listOfSundays
			.map(e => new Date(e))
			.forEach(element => {
				if (
					today.getFullYear() === element.getFullYear() &&
					today.getMonth() === element.getMonth() &&
					today.getDate() === element.getDate()
				) {
					isInList = false;
				}
			});

		return isInList;
	};

	render() {
		const IsSunday = new Date().getDay() === 0;
		let text;

		if (IsSunday) {
			if (this.isTradeSunday()) {
				text = "Niedziela handlowa";
			} else {
				text = "Niedziela niehandlowa";
			}
		} else {
			const daysToNearestTradeSunday = listOfSundays
				.map(e => new Date(e))
				.filter(el => this.dateDiffInDays(new Date(), el) > 0)
				.map(el => this.dateDiffInDays(new Date(), el))
				.sort((a, b) => a > b)[0];
			console.log(daysToNearestTradeSunday);
			text =
				"Niedziela " +
				(daysToNearestTradeSunday > 0 && daysToNearestTradeSunday < 7
					? ""
					: "nie") +
				"handlowa";
		}

		return (
			<TradeSundaysWrapper>
				<Text>{text}</Text>
			</TradeSundaysWrapper>
		);
	}
}
const Text = styled.h1`
	color: ${colors.text_color};
	font-family: "Noto Serif", serif;
	font-size: 2.5em;
`;
const TradeSundaysWrapper = styled.div`
	grid-area: sunday;
	text-align: center;
	padding: 20px 20px 0 0;
`;

export default TradeSundays;
