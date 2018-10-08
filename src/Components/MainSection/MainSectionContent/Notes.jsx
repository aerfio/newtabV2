import React, { Component } from 'react';
import axios from 'axios';
export class Notes extends Component {
	state = { notes: [] };
	componentDidMount = async () => {
		axios
			.get('http://localhost:3000/getNotes')
			.then(function(response) {
				console.log(response.data);
				this.setState({ notes: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	addNote = async () => {
		axios
			.post('http://localhost:3000/addNote', { text: 'xd', nmbr: '1' })
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	deleteNote = async () => {
		axios
			.post('http://localhost:3000/deleteNote', { nmbr: '1' })
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<React.Fragment>
				<button onClick={this.addNote}>add note</button>
				<button onClick={this.deleteNote}>delete note</button>
			</React.Fragment>
		);
	}
}

export default Notes;
