import React, { Component } from 'react';
import Navbutton from './NavButton/Navbutton';
import store from './../../../stores/MainStore';
import { observer } from 'mobx-react';
import styled from 'styled-components';
// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
const NavbarWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

class Navbar extends Component {
	render() {
		return (
			<NavbarWrapper>
				<Navbutton text="Links" store={store} />
				<Navbutton text="Notes" store={store} />
			</NavbarWrapper>
		);
	}
}

export default observer(Navbar);
