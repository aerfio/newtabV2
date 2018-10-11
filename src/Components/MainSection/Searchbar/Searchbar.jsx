import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import colors from './../../../colors';
import styled from 'styled-components';

const maxNumberOfElementsInStorage = 10;
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

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}

const Inpt = styled.input`
	&::placeholder {
		color: rgba(
			${hexToRgb(colors.text_color).r},
			${hexToRgb(colors.text_color).g},
			${hexToRgb(colors.text_color).b},
			0.34
		);
	}
`;
function renderInputComponent(inputProps) {
	return <Inpt autoFocus spellCheck={'false'} autoComplete={'off'} {...inputProps} />;
}

export default class Searchbar extends Component {
	state = {
		value: '',
		suggestions: [],
	};

	onChange = (event, { newValue }) => {
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
		window.location.assign(this.redirect());
		event.preventDefault();
	};
	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'Search',
			value,
			onChange: this.onChange,
		};

		return (
			<form onSubmit={this.onSubmit}>
				<Autosuggest
					theme={styles}
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					renderInputComponent={renderInputComponent}
				/>
			</form>
		);
	}
}

const styles = {
	container: {
		position: 'relative',
		display: 'flex',
		justifyItems: 'center',
		alignItems: 'center',
		width: '30vw',
		borderBottom: `1px solid ${colors.text_color}`,
	},
	input: {
		paddingLeft: '5px',
		paddingBottom: '8px',
		textAlign: 'center',
		height: '50px',
		width: '30vw',
		fontFamily: 'Noto Serif, sans-serif',
		color: `${colors.text_color}`,
		fontSize: '2.3em',
		border: 'none',
		marginLeft: 'auto',
		marginRight: 'auto',

		backgroundColor: `${colors.primary}`,
	},
	inputFocused: {
		outline: 'none',
	},
	suggestionsContainer: {
		display: 'none',
	},
	suggestionsContainerOpen: {
		display: 'block',
		position: 'absolute',
		top: '50px',
		left: '5vw',
		width: '20vw',
		border: '1px solid #aaa',
		backgroundColor: '#fff',
		fontFamily: 'Helvetica, sans-serif',
		fontWeight: '300',
		fontSize: '16px',
		borderBottomLeftRadius: '4px',
		borderBottomRightRadius: ' 4px',
		zIndex: '2',
	},
	suggestionsList: {
		margin: '0',
		padding: '0',
		listStyleType: 'none',
	},
	suggestion: {
		cursor: 'pointer',
		padding: '10px 20px',
	},
	suggestionHighlighted: {
		backgroundColor: '#ddd',
	},
};
