import React from 'react';
import PropTypes from 'prop-types';

ProfilePopUpListSmallItem.prototype = {
	name: PropTypes.string,
	idx: PropTypes.number,
	length: PropTypes.number,
	isOuterLink: PropTypes.bool,
};
function ProfilePopUpListSmallItem({ name, idx, length, isOuterLink }) {
	return (
		<li data-group='profileGroup'>
			<a
				href='/'
				className={`${idx === length && 'is-logout'}`}
				target={`${isOuterLink ? '_blank' : '_self'}`}
				rel={`${isOuterLink && 'noopener noreferrer'}`}
				data-group='profileGroup'
			>
				{idx === 0 && (
					<>
						<span data-group='profileGroup'>{name}</span>
						<div className='profilePic' data-group='profileGroup'>
							<span data-group='profileGroup'>N</span>
						</div>
					</>
				)}
				{idx !== 0 && <span data-group='profileGroup'>{name}</span>}
			</a>
		</li>
	);
}

export default ProfilePopUpListSmallItem;
