import React from 'react';
import PropTypes from 'prop-types';

ProfilePopUpListItem.prototype = {
	ele: PropTypes.string,
	idx: PropTypes.number,
	length: PropTypes.number,
};
function ProfilePopUpListItem({ ele, idx, length }) {
	return (
		<li data-group='profileGroup'>
			<a
				href='/'
				className={`flexBox ${idx === length && 'is-logout'}`}
				data-group='profileGroup'
			>
				<span>{ele}</span>
			</a>
		</li>
	);
}

export default ProfilePopUpListItem;
