import React, { Component } from 'react';
import axios from 'axios';
import store from '../../../stores/MainStore';
import styled from 'styled-components';
import { observer } from 'mobx-react';
const InfoText = styled.p`
	color: white;
`;

class Notes extends Component {
	addNote = async () => {
		axios
			.post('http://localhost:3000/addNote', { text: 'xd' })
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	deleteNote = async id => {
		axios
			.post('http://localhost:3000/deleteNote', { _id: id })
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		if (store.err) {
			return <InfoText>{store.err}</InfoText>;
		} else {
			if (store.loading) {
				return <InfoText>Still loading</InfoText>;
			} else {
				return (
					<React.Fragment>
						<button onClick={this.addNote}>add note</button>
						<ul>
							{store.notes.map(e => (
								<li key={e._id}>
									{e.text}
									<button onClick={() => this.deleteNote(e._id)}>delete me</button>
								</li>
							))}
						</ul>
					</React.Fragment>
				);
			}
		}
	}
}

export default observer(Notes);
