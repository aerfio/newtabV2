import React from 'react';
import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';
import './MainSection.css';
const MainSection = () => {
	return (
		<div className="main-section">
			<Searchbar />
			<Navbar />
		</div>
	);
};

export default MainSection;
