import React from 'react';
import '../../../style/ProfilePopUp.scss';
import { IoIosClose } from 'react-icons/io';
import { popUpMenuSmall } from '../../../utils/menuText';
import ProfilePopUpListSmall from './ProfilePopUpListSmall';

function ProfilePopUpSmall(props) {
	return (
		<div className='profilePopUpSmall' data-group='profileGroup'>
			<div data-group='profileGroup'>
				<div className='popUpFirstRow' data-group='profileGroup'>
					<i className='wantedSymbol' data-group='profileGroup' />
					<button type='button'>
						<IoIosClose />
					</button>
				</div>
				<ProfilePopUpListSmall popUpMenuSmall={popUpMenuSmall} />
			</div>
		</div>
	);
}

export default ProfilePopUpSmall;
// 화면 작아졌을 때 나타나는 프로필 팝업
