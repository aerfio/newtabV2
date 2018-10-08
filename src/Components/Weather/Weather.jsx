import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';
const apiKey = process.env.REACT_APP_API_KEY || '';
export class Weather extends Component {
    state = {
        weatherCurr: undefined,
        weatherFiveDays: undefined,
        err: undefined,
        loading: true,
    };

    componentDidMount = async () => {
        let getGeolocation = new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    e => resolve({ latitude: e.coords.latitude, longitude: e.coords.longitude }),
                    e => reject(e),
                );
            }
        });

        try {
            let location = await getGeolocation;
            const getCurrentWeather = locat =>
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${Number(locat.latitude).toFixed(
                        2,
                    )}&lon=${Number(locat.longitude).toFixed(2)}&units=metric&appid=${apiKey}`,
                );
            const getFiveDaysWeather = locat =>
                axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${Number(locat.latitude).toFixed(
                        2,
                    )}&lon=${Number(locat.longitude).toFixed(2)}&units=metric&appid=${apiKey}`,
                );

            let [wthrCurr, wthrFiveDays] = await Promise.all([
                getCurrentWeather(location),
                getFiveDaysWeather(location),
            ]);
            this.setState({ weatherCurr: wthrCurr.data, weatherFiveDays: wthrFiveDays.data, loading: false });
        } catch (err) {
            console.error(err.response);
            console.error(err.message);
            if (err.response) {
                this.setState({ err: err.message + '\n\n' + err.response.data.message, loading: false });
                return;
            }

            let errTxt = 'Nie pobrano danych.';
            this.setState({ err: errTxt, loading: false });
        }
    };

    getParsedWeatherForecast = (current, fiveDays) => {
        if (!(current && fiveDays)) {
            return;
        }
        const { name: city } = current;
        const currTemp = current.main.temp;
        const currWeatherDesc =
            current.weather[0].description[0].toUpperCase() + current.weather[0].description.substring(1);
        const { speed: wind } = current.wind;
        const ret = `City: ${city}:
Temp: ${currTemp}°C
Weather: ${currWeatherDesc}
Wind: ${wind}m/s`;

        const weatherAtProperHours = fiveDays.list
            .map(element => {
                if (
                    element.dt_txt.slice(-8, -3) === '09:00' ||
                    element.dt_txt.slice(-8, -3) === '12:00' ||
                    element.dt_txt.slice(-8, -3) === '15:00' ||
                    element.dt_txt.slice(-8, -3) === '18:00'
                ) {
                    return element;
                }
                return null;
            })
            .filter(e => !!e);
        const longForecast = weatherAtProperHours
            .map((el, index, arr) => {
                const weekday = new Date(el.dt_txt.split(' ')[0]).toLocaleDateString('en-gb', {
                    weekday: 'short',
                });
                const time = el.dt_txt.substring(11, 16);
                const date = el.dt_txt.substring(8, 10) + '-' + el.dt_txt.substring(5, 7);
                const temp =
                    (el.main.temp < 10 ? '0' + el.main.temp.toFixed(2) : el.main.temp.toFixed(2)) + '°C';
                const wind = `${el.wind.speed.toFixed(2)}m/s`;
                const tmpDesc = el.weather[0].description;
                const description = tmpDesc[0].toUpperCase() + tmpDesc.substring(1);
                let separator = '';
                const prevElement = arr[index - 1];
                if (prevElement) {
                    let compareDates =
                        prevElement.dt_txt.substring(8, 10) + '-' + prevElement.dt_txt.substring(5, 7) !==
                        date;
                    separator = compareDates ? '\n' : '';
                }
                return `${separator}${weekday} ${date} ${time}: ${temp}, ${wind}, ${description}`;
            })
            .join('\n');
        return ret + '\n\n\n' + longForecast;
    };

    render() {
        let text;
        if (this.state.loading) {
            text = 'Ściągam dane...';
        } else {
            if (this.state.err) {
                text = this.state.err;
            } else {
                text = this.getParsedWeatherForecast(this.state.weatherCurr, this.state.weatherFiveDays);
            }
        }

        return (
            <textarea
                className={'weather-textarea'}
                autoCorrect={'off'}
                spellCheck={false}
                readOnly={true}
                value={text}
            />
        );
    }
}

export default Weather;
