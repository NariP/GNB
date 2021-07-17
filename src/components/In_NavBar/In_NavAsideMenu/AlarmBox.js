import React from 'react';
import PropTypes from 'prop-types';

AlarmBox.propTypes = {
	contents: PropTypes.string,
	date: PropTypes.string,
};
function AlarmBox({ contents, date }) {
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

export default AlarmBox;
// AlarmList 의 내부
