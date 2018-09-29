import React, { Component } from 'react';
import './Navbar.css';
import Navbutton from './NavButton/Navbutton';
import store from './../../../stores/MainStore';
import { observer } from 'mobx-react';
// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }
export class Navbar extends Component {
	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Navbutton text="Links" store={store} />
				<Navbutton text="Notes" store={store} />
			</div>
		);
	}
}

export default observer(Navbar);
