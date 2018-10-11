import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import colors from './../../../colors';

const StyledButton = styled.button`
	margin: 20px 20px 20px 20px;
	min-width: 10vw;
	min-height: 10vh;
	transition-duration: 0.15s;
	background-color: ${colors.primary};
	border: 1px solid ${colors.text_color};
	color: ${colors.text_color};
	font-family: 'Noto Serif', serif;
	font-size: 2em;
	&:hover {
		color: ${colors.primary};
		border: 1px solid ${colors.primary};
		background-color: ${colors.text_color};
	}
	outline: none;
`;
const Navbutton = ({ text, store, pageChange }) => {
	return (
		<StyledButton
			onClick={action(`change page to '${text}'`, () => {
				if (pageChange) {
					store.page = 'Calendar';
				} else {
					store.subpage = text;
				}
			})}>
			{text}
		</StyledButton>
	);
};

export default observer(Navbutton);
