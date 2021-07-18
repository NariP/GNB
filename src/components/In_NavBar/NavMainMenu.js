import React from 'react';
import PropTypes from 'prop-types';
import '../../style/NavMainMenu.scss';

NavMainMenu.propTypes = {
	showDropDownMenu: PropTypes.func, // () => void
	hideDropDownMenu: PropTypes.func, // () => void
};

function NavMainMenu({ showDropDownMenu, hideDropDownMenu }) {
	return (
		<ul className='mainMenu'>
			<li>
				<a href='/' rel='home'>
					홈
				</a>
			</li>
			<li className='selectedNav' onMouseOver={showDropDownMenu}>
				<a href='/'>탐색</a>
			</li>
			<li onMouseOver={hideDropDownMenu}>
				<a href='/'>커리어 성장</a>
			</li>
			<li onMouseOver={hideDropDownMenu}>
				<a href='/'>직군별 연봉</a>
			</li>
			<li onMouseOver={hideDropDownMenu}>
				<a href='/'>이력서</a>
			</li>
			<li onMouseOver={hideDropDownMenu}>
				<a href='/'>매치업</a>
			</li>
			<li onMouseOver={hideDropDownMenu}>
				<a href='/' target='_blank' rel='noopener noreferrer'>
					프리랜서
				</a>
			</li>
			<li onMouseOver={hideDropDownMenu}>
				<a href='/'>
					Ai 합격예측 <span>Beta</span>
				</a>
			</li>
		</ul>
	);
}

export default NavMainMenu;
// GNB 의 메인 메뉴
// 홈, 탐색, 커리어 성장 ...
