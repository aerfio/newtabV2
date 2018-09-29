import React from 'react';
import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';
import MainSectionContent from './MainSectionContent/MainSectionContent';
import './MainSection.css';
const MainSection = () => {
	return (
		<div className="main-section">
			<Searchbar />
			<Navbar />
			<MainSectionContent />
		</div>
	);
};

export default MainSection;
