import React from 'react';
import PropTypes from 'prop-types';
import ProfilePopUpListSmallItem from './ProfilePopUpListSmallItem';

ProfilePopUpListSmall.prototype = {
	popUpMenuSmall: PropTypes.arrayOf(PropTypes.string),
};
function ProfilePopUpListSmall({ popUpMenuSmall }) {
	return (
		<ul className='profilePopUpListSmall' data-group='profileGroup'>
			{popUpMenuSmall.map(({ name, isOuterLink }, idx) => (
				<ProfilePopUpListSmallItem
					key={idx.toString()}
					name={name}
					idx={idx}
					length={popUpMenuSmall.length}
					isOuterLink={isOuterLink}
				/>
			))}
		</ul>
	);
}

export default ProfilePopUpListSmall;
// 화면이 작을 때 GNB 의 햄버거 메뉴 아이콘을 클릭 시 나오는 프로필 팝업 내용
