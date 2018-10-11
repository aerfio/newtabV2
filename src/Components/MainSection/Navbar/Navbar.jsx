import React, { Component } from 'react';
import Navbutton from './Navbutton';
import store from './../../../stores/MainStore';
import { observer } from 'mobx-react';
import styled from 'styled-components';

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
				<Navbutton pageChange text="Calendar" store={store} />
			</NavbarWrapper>
		);
	}
}

export default observer(Navbar);
