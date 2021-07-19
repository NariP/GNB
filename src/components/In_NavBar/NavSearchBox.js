import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import '../../style/NavSearchBox.scss';
import RecommendedTagsBox from './RecommendedTagsBox';

NavSearchBox.prototype = {
	hideSearchBox: PropTypes.func, // () => void
};
function NavSearchBox({ hideSearchBox }) {
	const [recommendedTagsBoxState, setRecommendedTagsBoxState] =
		useState(true);
	return (
		<div className='navSearchBox'>
			<div>
				<form role='presentation' action='.'>
					<input
						type='search'
						name='searchInput'
						placeholder='#태그, 회사, 포지션 검색'
						autoFocus
						autoComplete='off'
						onChange={(e) =>
							e.target.value.length > 0
								? setRecommendedTagsBoxState(false)
								: setRecommendedTagsBoxState(true)
						}
					/>
					<HiOutlineSearch className='searchIcon' />
					<button type='button' onClick={hideSearchBox}>
						<IoIosClose />
					</button>
				</form>
				{/*검색창 하단*/}
				{recommendedTagsBoxState && <RecommendedTagsBox />}
				{recommendedTagsBoxState && (
					<div className='blackOverlay'></div>
				)}
			</div>
		</div>
	);
}

export default NavSearchBox;
// GNB 의 검색창
// NabAsideMenu 의 검색 아이콘을 클릭 시 나오는 검색창
