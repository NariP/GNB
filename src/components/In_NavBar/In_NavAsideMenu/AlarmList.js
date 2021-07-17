import React from 'react';
import PropTypes from 'prop-types';
import AlarmBox from './AlarmBox';

AlarmList.propTypes = {
	isOuterLink: PropTypes.bool,
};
function AlarmList({ contents, date, isOuterLink }) {
	return (
		<li>
			<div>
				{isOuterLink && (
					<a
						className='flexBox'
						href='/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<AlarmBox contents={contents} date={date} />
						<div>svg(_right_arrow_>)</div>
					</a>
				)}
				{!isOuterLink && <AlarmBox contents={contents} date={date} />}
			</div>
		</li>
	);
}

export default AlarmList;
// AlarmPopUp 내부 각각의 list item 들
