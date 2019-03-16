import React, { Component } from "react";
import axios from "axios";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";

import store from "./stores/MainStore";

import Clock from "./Components/Clock/Clock";
import TradeSaturdays from "./Components/TradeSaturdays/TradeSaturdays";
import EvenOrOddWeek from "./Components/EvenOrOddWeek/EvenOrOddWeek";
import CurrentDate from "./Components/CurrentDate/CurrentDate";
import MainSection from "./Components/MainSection/MainSection";
import Plan from "./Components/Plan/Plan";
import Weather from "./Components/Weather/Weather";
import Calendar from "./Calendar";

import colors from "./colors";
const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 10fr 10fr 30fr 10fr 10fr;
    grid-template-rows: 17vh 13vh auto;
    grid-template-areas:
        "weather    weather    date      saturday       saturday"
        "weather    weather    clock     even_or_odd    even_or_odd"
        "weather    weather    mainSection    .              .";
    background-color: ${colors.primary};
    min-height: 100vh;
    grid-column-gap: 0;
    grid-row-gap: 0;
`;

class App extends Component {
    componentDidMount = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND}getNotes`)
            .then((response) => {
                runInAction(`fetch notes`, () => {
                    store.notes = response.data;
                    store.loading = false;
                });
            })
            .catch((error) => {
                console.error(error);

                runInAction(`save error message`, () => {
                    store.err = "Błąd połączenia.";
                });
            });
    };
    render() {
        if (localStorage.getItem("1") !== process.env.REACT_APP_SECRET) {
            //laziest security ever
            return <p>No access</p>;
        } else {
            switch (store.page) {
                case "Main":
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
                case "Calendar":
                    return <Calendar />;

                default:
                    return <p>Wrong page!</p>;
            }
        }
    }
}

export default observer(App);
