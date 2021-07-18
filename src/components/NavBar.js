import React, { useState } from 'react';
import {
	DropDownMenu,
	NavAsideMenu,
	NavMainMenu,
	NavSearchBox,
	RecommendedTagsBox,
	TextLogo,
} from './In_NavBar';
import '../style/NavBar.scss';

function NavBar(props) {
	const [isHover, setIsHover] = useState(false);
	const showDropDownMenu = () => {
		setIsHover(true);
	};
	const hideDropDownMenu = () => {
		setIsHover(false);
	};
	return (
		<header
			className={`${isHover && 'noBoxShadow'}`}
			role='presentation'
			onClick={hideDropDownMenu}
		>
			<div className='mediaDiv' role='presentation'>
				<nav>
					{/*메뉴들*/}
					<TextLogo />
					<NavMainMenu
						showDropDownMenu={showDropDownMenu}
						hideDropDownMenu={hideDropDownMenu}
					/>
					{/*드롭다운 메뉴*/}
					<DropDownMenu
						isHover={isHover}
						showDropDownMenu={showDropDownMenu}
						hideDropDownMenu={hideDropDownMenu}
					/>
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
// GNB
