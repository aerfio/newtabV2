import React, { Component } from 'react';
import axios from 'axios';
import store from '../../../stores/MainStore';
import styled, { keyframes } from 'styled-components';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';
import colors from './../../../colors';
import './css/fontello.css';
class Notes extends Component {
	state = { value: '' };
	updateNotes = async () => {
		try {
			const info = await axios.get(`${process.env.REACT_APP_BACKEND}getNotes`);
			runInAction('update notes data', () => {
				store.notes = info.data;
			});
		} catch (error) {
			console.error(error);
		}
	};
	addNote = async arg => {
		axios
			.post(`${process.env.REACT_APP_BACKEND}addNote`, { text: arg })
			.then(response => {
				console.log(response.data);
				this.updateNotes();
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	deleteNote = async id => {
		axios
			.delete(`${process.env.REACT_APP_BACKEND}deleteNote`, { data: { _id: id } })
			.then(response => {
				console.log(response.data);
				this.updateNotes();
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	handleChange = event => this.setState({ value: event.target.value });

	handleSubmit = event => {
		this.addNote(this.state.value);
		this.setState({ value: '' });
		event.preventDefault();
	};
	render() {
		if (store.err) {
			return <InfoText>{store.err}</InfoText>;
		} else {
			if (store.loading) {
				return <InfoText>Ściągam dane</InfoText>;
			} else {
				return (
					<React.Fragment>
						<NotesForm onSubmit={this.handleSubmit}>
							<NotesInput
								onChange={this.handleChange}
								autoCorrect={'off'}
								spellCheck={'false'}
								placeholder={'ಠ_ಠ'}
								autoFocus
								autoComplete={'off'}
								type="text"
								value={this.state.value}
							/>
						</NotesForm>
						<List>
							{store.notes.map(e => (
								<ListElement key={e._id}>
									<Text>{e.text}</Text>
									<DeleteButton onClick={() => this.deleteNote(e._id)}>
										<i className="icon-trash-1">{}</i>
									</DeleteButton>
								</ListElement>
							))}
						</List>
					</React.Fragment>
				);
			}
		}
	}
}
const DeleteButton = styled.button`
	color: ${colors.text_color};
	outline: none;
	background-color: ${colors.primary};
	border: none;
	align-self: center;
`;
const Text = styled.p`
	word-wrap: break-word;
	max-width: 37vw;
	color: ${colors.text_color};
	font-size: 1.2em;
	font-family: 'Noto Serif', sans-serif;
	margin: 15px 0 5px 0;
	line-height: 1.4em;
`;
const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(75%);
	}
	to {
		opacity: 1;
		transform: none;
	}
`;
const ListElement = styled.li`
	border-bottom: 1px solid ${colors.text_color};
	display: flex;
	justify-content: space-between;
	min-width: 40vw;
	animation: ${fadeInUp} 0.75s;
`;
const List = styled.ul`
	max-width: 40vw;
	list-style-type: none;
	padding-inline-start: 0;
`;
const InfoText = styled.p`
	color: ${colors.text_color};
	font-size: 1.5em;
`;
const NotesForm = styled.form`
	display: flex;
	justify-content: center;
	padding-top: 15px;
`;
const NotesInput = styled.input`
	padding-left: 5px;
	padding-bottom: 8px;
	text-align: center;
	height: 50px;
	font-family: 'Noto Serif', sans-serif;
	color: ${colors.text_color};
	font-size: 2.3em;
	border: none;
	outline: none;
	width: 90%;
	border-bottom: 1px solid ${colors.text_color};
	background-color: ${colors.primary};
	&::placeholder {
		color: rgba(
			${hexToRgb(colors.text_color).r},
			${hexToRgb(colors.text_color).g},
			${hexToRgb(colors.text_color).b},
			0.34
		);
	}
`;

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
export default observer(Notes);
