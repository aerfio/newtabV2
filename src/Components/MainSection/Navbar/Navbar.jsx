import React, { PureComponent } from 'react';
import './Navbar.css';
import Navbutton from './NavButton/Navbutton';
if (process.env.NODE_ENV !== 'production') {
	const { whyDidYouUpdate } = require('why-did-you-update');
	whyDidYouUpdate(React);
}
export class Navbar extends PureComponent {
	state = { pageToShow: 1 };
	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Navbutton text="Links" showPage={() => this.setState({ pageToShow: 1 })} />
					<Navbutton text="Todo" showPage={() => this.setState({ pageToShow: 2 })} />
				</div>
				{this.state.pageToShow}
			</div>
		);
	}
}

export default Navbar;
