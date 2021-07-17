import React from 'react';
import {
	DropDownMenu,
	NavAsideMenu,
	NavMainMenu,
	NavSearchBox,
	RecommendedTagsBox,
	TextLogo,
} from './In_NavBar';

function NavBar(props) {
	return (
		<header role='presentation'>
			<div className='mediaDiv' role='presentation'>
				<nav>
					{/*메뉴들*/}
					<TextLogo />
					<NavMainMenu />
					{/*드롭다운 메뉴*/}
					<DropDownMenu />
					<NavAsideMenu />
				</nav>
			</div>
			{/*검색창*/}
			<NavSearchBox />
			{/*검색창 하단*/}
			<RecommendedTagsBox />
		</header>
	);
}

export default NavBar;
