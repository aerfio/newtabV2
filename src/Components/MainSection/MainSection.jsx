import React from 'react';
import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';
import MainSectionContent from './MainSectionContent/MainSectionContent';
import './MainSection.css';
import styled from 'styled-components';
const Wrapper = styled.section`
	grid-area: mainSection;
`;

const MainSection = () => {
	return (
		<Wrapper>
			<Searchbar />
			<Navbar />
			<MainSectionContent />
		</Wrapper>
	);
};

export default MainSection;
