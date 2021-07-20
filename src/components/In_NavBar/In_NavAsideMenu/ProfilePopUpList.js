import React from 'react';
import PropTypes from 'prop-types';
import ProfilePopUpListItem from './ProfilePopUpListItem';

ProfilePopUpList.prototype = {
	popUpMenuSmall: PropTypes.arrayOf(PropTypes.string),
};
function ProfilePopUpList({ popUpMenu }) {
	return (
		<ul className='ProfilePopUpList' data-group='profileGroup'>
			{popUpMenu.map((ele, idx) => (
				<ProfilePopUpListItem
					key={idx.toString()}
					ele={ele}
					length={popUpMenu.length}
				/>
			))}
		</ul>
	);
}

export default ProfilePopUpList;
// GNB 의 프로필 아이콘 클릭시 나오는 프로필 팝업 내용
