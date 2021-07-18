import React from 'react';

function NavSearchBox(props) {
	return (
		<div style={{ display: 'none' }}>
			<div>
				<form role='presentation' action='.'>
					<input
						type='search'
						placeholder='#태그, 회사, 포지션 검색'
						autoComplete='off'
						value='value'
						readOnly
					/>
					<span>svg(_search)</span>
					<button type='button'>svg(_reset_x)</button>
				</form>
			</div>
		</div>
	);
}

export default NavSearchBox;
// GNB 의 검색창
// NabAsideMenu 의 검색 아이콘을 클릭 시 나오는 검색창
