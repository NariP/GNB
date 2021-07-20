import React from 'react';
import PropTypes from 'prop-types';
import AlarmListItem from './AlarmListItem';
import { IoIosArrowForward } from 'react-icons/all';

AlarmList.propTypes = {
	contents: PropTypes.string,
	date: PropTypes.string,
	isOuterLink: PropTypes.bool,
};
function AlarmList({ contents, date, isOuterLink }) {
	return (
		<li data-group='notiGroup'>
			<div data-group='notiGroup'>
				{isOuterLink && (
					<a
						className='flexBox'
						href='/'
						target='_blank'
						rel='noopener noreferrer'
						data-group='notiGroup'
					>
						<AlarmListItem contents={contents} date={date} />
						<div data-group='notiGroup'>
							<IoIosArrowForward data-group='notiGroup' />
						</div>
					</a>
				)}
				{!isOuterLink && (
					<AlarmListItem contents={contents} date={date} />
				)}
			</div>
		</li>
	);
}

export default AlarmList;
// AlarmPopUp 내부 각각의 list item 들
