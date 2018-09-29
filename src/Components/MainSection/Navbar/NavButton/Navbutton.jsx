import React from 'react';
import { action } from 'mobx';
import './Navbutton.css';
import { observer } from 'mobx-react';
const Navbutton = ({ text, store }) => {
	return (
		<button
			onClick={action(`change page to '${text}'`, () => {
				store.page = text;
			})}
			className="navbutton">
			{text}
		</button>
	);
};

export default observer(Navbutton);
