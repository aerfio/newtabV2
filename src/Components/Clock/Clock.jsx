import React, { Component } from 'react';

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
			<h1 className="clock">
				{this.fixedTime(this.state.date.getHours()) + ':' + this.fixedTime(this.state.date.getMinutes())}
			</h1>
		);
	}
}

export default Clock;
