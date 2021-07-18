import React from 'react';
import PropTypes from 'prop-types';
import { OneMenu, OneBigMenu } from './In_DropDownMenu';
import { menus, bigMenu } from '../../utils/menuText';
import '../../style/DropDownMenu.scss';

DropDownMenu.prototype = {
	isHover: PropTypes.bool.isRequired,
	showDropDownMenu: PropTypes.func, // () => void
	hideDropDownMenu: PropTypes.func, // () => void
};
function DropDownMenu({ isHover, showDropDownMenu, hideDropDownMenu }) {
	const oneMenu = menus.map((menu, idx) => (
		<OneMenu key={idx.toString()} menu={menu} />
	));

	return (
		<div className={`dropDownMenu ${isHover && 'showMenu'}`}>
			<div
				className='overlay'
				onMouseOver={showDropDownMenu}
				onMouseLeave={hideDropDownMenu}
			>
				<div className='container'>
					<div className='row'>
						{oneMenu}
						<OneBigMenu bigMenu={bigMenu} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DropDownMenu;
// GNB 의 드롭다운 메뉴
// 탐색에 마우스 호버 시 나오는 상세 메뉴
