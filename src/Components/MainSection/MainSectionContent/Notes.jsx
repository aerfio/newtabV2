import React, { Component } from 'react';
import axios from 'axios';
import store from '../../../stores/MainStore';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

const InfoText = styled.p`
	color: white;
`;

class Notes extends Component {
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
	addNote = async () => {
		axios
			.post(`${process.env.REACT_APP_BACKEND}addNote`, { text: 'xd' })
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
								<li style={{ color: 'white' }} key={e._id}>
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
