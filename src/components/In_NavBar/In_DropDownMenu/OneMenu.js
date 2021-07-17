import React from 'react';
import PropTypes from 'prop-types';
import MenuBody from './MenuBody';

OneMenu.propTypes = {
	menu: PropTypes.arrayOf(PropTypes.string),
};

function OneMenu({ menu }) {
	return (
		<div>
			{menu.map((ele, idx) => (
				<MenuBody key={idx.toString()} ele={ele} idx={idx} />
			))}
			<a href='/'>
				<h3>
					더보기<i>icon(_arrow_right_>)</i>
				</h3>
			</a>
		</div>
	);
}

export default OneMenu;
// DropDownMenu 의 개별 메뉴 덩어리
