import React from 'react';
import '../../../style/ProfilePopUp.scss';
import ProfilePopUpList from './ProfilePopUpList';
import { popUpMenu } from '../../../utils/menuText';

function ProfilePopUp(props) {
	return (
		<div className='profilePopUp' data-group='profileGroup'>
			<div data-group='profileGroup'>
				<div className='popUpFirstRow' data-group='profileGroup'>
					<i className='wantedSymbol' data-group='profileGroup'>
						symbol
					</i>
					<button type='button'>X</button>
				</div>
				<ProfilePopUpList popUpMenu={popUpMenu} />
			</div>
			{/* 말풍선 꼬리 */}
			<div className='bubbleTail' data-group='profileGroup'></div>
		</div>
	);
}

export default ProfilePopUp;
// GNB 의 프로필 아이콘 클릭시 나오는 프로필 팝업 메뉴
