import React from 'react';
import PropTypes from 'prop-types';
import OneMenu from './OneMenu';
import BigMenuBody from './BigMenuBody';

OneMenu.propTypes = {
	bigMenu: PropTypes.arrayOf(PropTypes.string),
};

function OneBigMenu({ bigMenu }) {
	return (
		<div>
			{bigMenu.map((ele, idx) => (
				<BigMenuBody key={idx.toString()} ele={ele} />
			))}
		</div>
	);
}

export default OneBigMenu;
// DropDownMenu 의 개별 메뉴 덩어리 중 글씨가 큰 것들
