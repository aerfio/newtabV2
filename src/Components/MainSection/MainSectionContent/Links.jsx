import React from 'react';
import styled, { keyframes } from 'styled-components';

import colors from '../../../colors';

const links = {
	Facebook: 'https://www.facebook.com/home.php',
	'Img Search': 'https://images.google.com/',
	'/mu/': 'https://boards.4chan.org/mu/',
	Pogoda: 'https://www.google.pl/search?q=pogoda&cad=h',
	Drive: 'https://drive.google.com/drive/my-drive',
	Platforma: 'https://platforma.polsl.pl/rau1/course/index.php?categoryid=26',
};
const anim = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const Header = styled.h1`
	margin: 0;
	text-align: center;
	animation: ${anim};
	color: ${colors.text_color};
`;
const List = styled.ul`
	animation: ${anim} 0.2s;
	margin: 0;
	display: inline-block;
	list-style-type: none;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-inline-start: 0;
	padding-bottom: 20px;
`;
const ListElement = styled.li`
	text-align: center;
	animation: ${anim};
`;
const Link = styled.a`
	color: ${colors.text_color};
	text-decoration: none;
	&:visited,
	&:hover {
		text-decoration: none;
	}
`;
const Wrapper = styled.section`
	animation: ${anim} 0.2s;
	width: 50%;
	border-bottom: 1px solid ${colors.text_color};
`;
const Links = () => {
	return (
		<Wrapper>
			<Header>Links</Header>
			<List>
				{Object.keys(links).map((el, index) => {
					return (
						<ListElement key={index}>
							<Link href={links[el]} target={'_blank'}>
								{el}
							</Link>
						</ListElement>
					);
				})}
			</List>
		</Wrapper>
	);
};

export default Links;
