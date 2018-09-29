import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './Searchbar.css';

const maxNumberOfElementsInStorage = 8;
const listOfRedirects = {
	'!y': 'https://www.youtube.com/results?search_query=',
	'!g': 'https://www.google.pl/search?q=',
	'!t': 'https://translate.google.pl/#en/pl/',
	'!p': 'https://translate.google.pl/#pl/en/',
	'!w': 'https://pl.wikipedia.org/wiki/',
};

function getSuggestions(value) {
	let notesInLocalStorage = [];
	for (let i = 0; i < localStorage.length; i++) {
		notesInLocalStorage = [...notesInLocalStorage, localStorage.getItem(localStorage.key(i))].reverse();
	}
	if (value.trim() === '') {
		return [];
	}
	return notesInLocalStorage
		.filter(arg =>
			arg
				.trim()
				.toLowerCase()
				.includes(value.trim().toLowerCase()),
		)
		.map(element => ({ name: element }));
}

function getSuggestionValue(suggestion) {
	return suggestion.name;
}

function renderSuggestion(suggestion) {
	return <span>{suggestion.name}</span>;
}

export default class Searchbar extends Component {
	state = {
		value: '',
		suggestions: [],
	};

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue,
		});
	};

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};
	addToLocalStorage = () => {
		let notesInLocalStorage = [];
		for (let i = 0; i < maxNumberOfElementsInStorage; i++) {
			notesInLocalStorage = [...notesInLocalStorage, localStorage.getItem(localStorage.key(i))];
		}
		if (notesInLocalStorage.includes(this.state.value.trim())) {
			return;
		}
		if (localStorage.length < maxNumberOfElementsInStorage) {
			localStorage.setItem(`${localStorage.length + 1}`, this.state.value);
		} else {
			if (this.state.value !== '') {
				notesInLocalStorage = [...notesInLocalStorage.slice(1), this.state.value];
				notesInLocalStorage.forEach((element, index) => {
					localStorage.setItem(`${index + 1}`, element);
				});
			}
		}
	};
	redirect = () => {
		let length = this.state.value.length;
		let suffix = this.state.value.substr(length - 2, 2);
		let data;
		if (Object.keys(listOfRedirects).includes(suffix)) {
			data = this.state.value.substr(0, length - 2);
		} else {
			data = this.state.value;
		}

		let patt = /[a-zA-Z0-9]+/g;
		let dataSplitBySpace = data.split(' ');
		if (
			data.length > 4 &&
			dataSplitBySpace.length > 1 &&
			dataSplitBySpace[0] === 'chan' &&
			patt.test(dataSplitBySpace[1])
		) {
			return 'https://boards.4chan.org/' + dataSplitBySpace[1] + '/';
		}

		//google cannot into '#' or '&'
		let link;
		if (data.includes('#') || data.includes('&')) {
			link = data.replace(/[#&]/g, x => x.replace(x, '%' + (x.charCodeAt(0) - 12)));
		} else {
			link = data;
		}
		if (listOfRedirects[suffix] !== undefined) {
			return listOfRedirects[suffix] + link;
		}
		return 'https://www.google.pl/search?q=' + link;
	};
	onSubmit = event => {
		this.addToLocalStorage();
		//window.location.assign(this.redirect());
		event.preventDefault();
	};
	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: "Type 'c'",
			value,
			onChange: this.onChange,
		};

		return (
			<form onSubmit={this.onSubmit}>
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
				/>
			</form>
		);
	}
}
