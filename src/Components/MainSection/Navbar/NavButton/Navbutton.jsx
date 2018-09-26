import React from 'react';
import './Navbutton.css';
const Navbutton = ({ text, showPage }) => {
	return (
		<button onClick={showPage} className="navbutton">
			{text}
		</button>
	);
};

export default Navbutton;
