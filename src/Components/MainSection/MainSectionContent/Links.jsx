import React from 'react';
import './Links.css';
const links = {
	Facebook: 'https://www.facebook.com/home.php',
	'Img Search': 'https://images.google.com/',
	'/mu/': 'https://boards.4chan.org/mu/',
	Pogoda: 'https://www.google.pl/search?q=pogoda&cad=h',
	Drive: 'https://drive.google.com/drive/my-drive',
	Platforma: 'https://platforma.polsl.pl/rau1/course/index.php?categoryid=26',
};
const Links = () => {
	return (
		<div className="square">
			<h1 className="header">{'Links'}</h1>
			<ul className={'list'}>
				{Object.keys(links).map(el => {
					return (
						<li className={'list-element'} key={el}>
							<a className={'link'} href={links[el]}>
								{el}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Links;
