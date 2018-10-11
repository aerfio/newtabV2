import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import colors from './colors';
import store from './stores/MainStore';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${colors.primary};
	height: 100vh;
`;
const Button = styled.button`
	padding: 10px;
	color: ${colors.text_color};
	background-color: ${colors.primary};
	border: 1px solid ${colors.text_color};
	outline: none;
	font-size: 1.2em;
`;
const IframeWrapper = styled.div`
	margin: 20px 0px 20px 0px;
	width: 85%;
	height: 80%;
`;
const calendarUrl = process.env.REACT_APP_CALENDAR_IFRAME;
const Calendar = () => {
	return (
		<Wrapper>
			<IframeWrapper>
				<Iframe url={calendarUrl} position="relative" />
			</IframeWrapper>
			<Button
				onClick={() => {
					runInAction('change to main view', () => {
						store.page = 'Main';
					});
				}}>
				Go back!
			</Button>
		</Wrapper>
	);
};

export default observer(Calendar);
