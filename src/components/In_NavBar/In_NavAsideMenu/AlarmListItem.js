import React from 'react';
import PropTypes from 'prop-types';

AlarmListItem.propTypes = {
	contents: PropTypes.string,
	date: PropTypes.string,
};
function AlarmListItem({ contents, date }) {
	return (
		<div data-group='notiGroup'>
			<p className='noti' data-group='notiGroup'>
				공지
			</p>
			<p className='notiStory' data-group='notiGroup'>
				{contents.split('<br />').map((ele, idx) => (
					<span
						key={idx.toString()}
						style={{ display: 'block' }}
						data-group='notiGroup'
					>
						{ele}
					</span>
				))}
			</p>
			<p className='notiDate' data-group='notiGroup'>
				{date}
			</p>
		</div>
	);
}

export default AlarmListItem;
// AlarmList 의 내부
