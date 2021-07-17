import React from 'react';
import PropTypes from 'prop-types';

AlarmListItem.propTypes = {
	contents: PropTypes.string,
	date: PropTypes.string,
};
function AlarmListItem({ contents, date }) {
	return (
		<div>
			<p>공지</p>
			<p>
				{contents.split('<br />').map((ele, idx) => (
					<span key={idx.toString()} style={{ display: 'block' }}>
						{ele}
					</span>
				))}
			</p>
			<p>{date}</p>
		</div>
	);
}

export default AlarmListItem;
// AlarmList 의 내부
