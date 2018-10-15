import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../colors';
const listOfSaturdays = require('./listOfSaturdays.js');
const MS_PER_DAY = 1000 * 60 * 60 * 24;
export class TradeSaturdays extends Component {
    dateDiffInDays = (a, b) => {
        // Discard the time and time-zone information.
        const firstDate = a.getTime();
        const secondDate = b.getTime();
        return (secondDate - firstDate) / MS_PER_DAY;
    };
    isTradeSaturday = () => {
        let isInList = true;
        let today = new Date();
        listOfSaturdays.map(e => new Date(e)).forEach(element => {
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
        const IsSaturday = new Date().getDay() === 0;
        let text;
        if (IsSaturday) {
            if (this.isTradeSaturday()) {
                text = 'Niedziela handlowa';
            } else {
                text = 'Niedziela niehandlowa';
            }
        } else {
            const daysToNearestNonTradeSaturday = listOfSaturdays
                .map(e => new Date(e))
                .filter(el => this.dateDiffInDays(new Date(), el) > 0)
                .map(el => this.dateDiffInDays(new Date(), el))
                .sort((a, b) => a > b)[0];
            text =
                'Niedziela ' +
                (daysToNearestNonTradeSaturday > 0 && daysToNearestNonTradeSaturday < 7 ? 'nie' : '') +
                'handlowa';
        }

        return (
            <TradeSaturdaysWrapper>
                <Text>{text}</Text>
            </TradeSaturdaysWrapper>
        );
    }
}
const Text = styled.h1`
    color: ${colors.text_color};
    font-family: 'Noto Serif', serif;
    font-size: 2.5em;
`;
const TradeSaturdaysWrapper = styled.div`
    grid-area: saturday;
    text-align: center;
    padding: 20px 20px 0 0;
`;

export default TradeSaturdays;
