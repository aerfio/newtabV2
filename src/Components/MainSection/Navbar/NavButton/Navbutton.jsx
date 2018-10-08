import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
const StyledButton = styled.button`
	margin: 20px 20px 20px 20px;
	width: 8vw;
	height: 8vh;
	&:hover {
		color: blue;
	}
`;
const Navbutton = ({ text, store }) => {
	return (
		<StyledButton
			onClick={action(`change page to '${text}'`, () => {
				store.page = text;
			})}>
			{text}
		</StyledButton>
	);
};

export default observer(Navbutton);
