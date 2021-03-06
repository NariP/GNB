import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import PropTypes from 'prop-types';

MenuBody.propTypes = {
	ele: PropTypes.string,
	idx: PropTypes.number,
};
function MenuBody({ ele, idx }) {
	return (
		<a href='/'>
			{idx === 0 && (
				<h2>
					{ele}
					<i>
						<IoIosArrowForward />
					</i>
				</h2>
			)}
			{idx !== 0 && <h3>{ele}</h3>}
		</a>
	);
}

export default MenuBody;
// OneMenu 의 내용
