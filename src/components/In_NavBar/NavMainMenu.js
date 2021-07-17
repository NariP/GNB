import React from 'react';

function NavMainMenu(props) {
	return (
		<ul>
			<li>
				<a href='/' rel='home'>
					홈
				</a>
			</li>
			<li>
				<a href='/'>탐색</a>
			</li>
			<li>
				<a href='/'>커리어 성장</a>
			</li>
			<li>
				<a href='/'>직군별 연봉</a>
			</li>
			<li>
				<a href='/'>이력서</a>
			</li>
			<li>
				<a href='/'>매치업</a>
			</li>
			<li>
				<a href='/' target='_blank' rel='noopener noreferrer'>
					프리랜서
				</a>
			</li>
			<li>
				<a href='/'>
					Ai 합격예측 <span>svg(_Beta)</span>
				</a>
			</li>
		</ul>
	);
}

export default NavMainMenu;
// GNB 의 메인 메뉴
// 홈, 탐색, 커리어 성장 ...
