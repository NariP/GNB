import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import PropTypes from 'prop-types';

BigMenuBody.propTypes = {
	ele: PropTypes.string,
};
function BigMenuBody({ ele }) {
	return (
		<a href='/'>
			<h2>
				{ele}
				<i>
					<IoIosArrowForward />
				</i>
			</h2>
		</a>
	);
}

export default BigMenuBody;
// OneBigMenu 의 내용
