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
		<li>
			<a
				href='/'
				className={`${idx === length && 'is-logout'}`}
				target={`${isOuterLink ? '_blank' : '_self'}`}
				rel={`${isOuterLink && 'noopener noreferrer'}`}
			>
				{idx === 0 && (
					<>
						<span>{name}</span>
						<div className='profilePic'>
							img(_bg)
							<span>svg(_N)</span>
						</div>
					</>
				)}
				{idx !== 0 && <span>{name}</span>}
			</a>
		</li>
	);
}

export default ProfilePopUpListSmallItem;
