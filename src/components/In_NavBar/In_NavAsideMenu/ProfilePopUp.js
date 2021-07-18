import React from 'react';
import ProfilePopUpList from './ProfilePopUpList';
import ProfilePopUpListSmall from './ProfilePopUpListSmall';
import { popUpMenu, popUpMenuSmall } from '../../../utils/menuText';

function ProfilePopUp(props) {
	return (
		<div style={{ display: 'none' }}>
			<div>
				<div>icon(_wanted_symbol)</div>
				<ProfilePopUpList popUpMenu={popUpMenu} />
				{/*화면 작아졌을 때 나타나는 프로필 팝업*/}
				<ProfilePopUpListSmall popUpMenuSmall={popUpMenuSmall} />
			</div>
		</div>
	);
}

export default ProfilePopUp;
// GNB 의 프로필 아이콘 클릭시 나오는 프로필 팝업 메뉴
