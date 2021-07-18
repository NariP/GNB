import React from 'react';
import { OneMenu, OneBigMenu } from './In_DropDownMenu';
import { menus, bigMenu } from '../../utils/menuText';

function DropDownMenu(props) {
	const oneMenu = menus.map((menu, idx) => (
		<OneMenu key={idx.toString()} menu={menu} />
	));
	return (
		<div style={{ display: 'none' }}>
			<div className='container'>
				<div className='row'>
					{oneMenu}
					<OneBigMenu bigMenu={bigMenu} />
				</div>
			</div>
		</div>
	);
}

export default DropDownMenu;
// GNB 의 드롭다운 메뉴
// 탐색에 마우스 호버 시 나오는 상세 메뉴
