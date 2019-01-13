import React, { Component } from "react";
import styled from "styled-components";
import colors from "./../../colors";

const ClockContainer = styled.div`
    grid-area: clock;
    text-align: center;
    margin: 0px 0 0 0;
    padding: 0 0 0 0;
`;
const ClockText = styled.h1`
    color: ${colors.text_color};
    font-family: "Lora", sans-serif;
    font-size: 4em;
    margin: 0px 0 0 0;
    padding: 0 0 0 0;
`;

export class Clock extends Component {
    state = {
        date: new Date(),
    };
    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({ date: new Date() }),
            1000,
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    fixedTime(i) {
        return i < 10 ? "0" + i : i;
    }
    render() {
        return (
            <ClockContainer>
                <ClockText>
                    {this.fixedTime(this.state.date.getHours()) +
                        ":" +
                        this.fixedTime(this.state.date.getMinutes())}
                </ClockText>
            </ClockContainer>
        );
    }
}
ClockText.displayName = "ClockText";
export default Clock;
