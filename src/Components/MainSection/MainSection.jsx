import React from 'react';
import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';
import MainSectionContent from './MainSectionContent/MainSectionContent';

import styled from 'styled-components';
const Wrapper = styled.section`
	grid-area: mainSection;
	display: flex;
	flex-direction: column;
	align-items: center;
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
