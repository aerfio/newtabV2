import React, { Component } from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
	grid-area: clock;
	text-align: center;
`;
const ClockText = styled.h1`
	color: white;
`;

export class Clock extends Component {
	state = {
		date: new Date(),
	};
	componentDidMount() {
		this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	fixedTime(i) {
		return i < 10 ? '0' + i : i;
	}
	render() {
		return (
			<ClockContainer>
				<ClockText>
					{this.fixedTime(this.state.date.getHours()) + ':' + this.fixedTime(this.state.date.getMinutes())}
				</ClockText>
			</ClockContainer>
		);
	}
}

export default Clock;
