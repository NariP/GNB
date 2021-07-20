import React, { useState } from 'react';
import {
	DropDownMenu,
	NavAsideMenu,
	NavMainMenu,
	NavSearchBox,
	TextLogo,
} from './In_NavBar';
import '../style/NavBar.scss';

function NavBar(props) {
	const [isHover, setIsHover] = useState(false);
	const [searchBoxState, setSearchBoxState] = useState(false);
	const [alarmPopUpState, setAlarmPopUpState] = useState(false);
	// dropDownMenu
	const showDropDownMenu = () => {
		setIsHover(true);
	};
	const hideDropDownMenu = () => {
		setIsHover(false);
	};

	// searchBox
	const showSearchBox = () => {
		setSearchBoxState(true);
	};
	const hideSearchBox = () => {
		setSearchBoxState(false);
	};

	// alarmPopUp
	const hideAlarmPopUp = () => {
		setAlarmPopUpState(false);
	};

	const onClickHandler = (e) => {
		hideDropDownMenu();
		searchBoxState && e.target.name !== 'searchInput' && hideSearchBox();
		alarmPopUpState &&
			e.target.dataset.group !== 'notiGroup' &&
			hideAlarmPopUp();
	};

	return (
		<header
			className={`${isHover && 'noBoxShadow'}`}
			role='presentation'
			onClick={(e) => onClickHandler(e)}
		>
			<div className='mediaDiv' role='presentation'>
				<nav>
					{/*메뉴들*/}
					<TextLogo />
					<NavMainMenu
						showDropDownMenu={showDropDownMenu}
						hideDropDownMenu={hideDropDownMenu}
						hideAlarmPopUp={hideAlarmPopUp}
					/>
					{/*드롭다운 메뉴*/}
					<DropDownMenu
						isHover={isHover}
						showDropDownMenu={showDropDownMenu}
						hideDropDownMenu={hideDropDownMenu}
					/>
					<NavAsideMenu
						alarmPopUpState={alarmPopUpState}
						showSearchBox={showSearchBox}
						setAlarmPopUpState={setAlarmPopUpState}
					/>
				</nav>
			</div>
			{/*검색창*/}
			{searchBoxState && <NavSearchBox hideSearchBox={hideSearchBox} />}
		</header>
	);
}

export default NavBar;
// GNB
