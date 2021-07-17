import React from 'react';
import { AlarmPopUp, ProfilePopUp } from './In_NavAsideMenu';

function NavAsideMenu(props) {
	return (
		<aside>
			<ul>
				<li>
					<button>svg(_search)</button>
				</li>
				<li>
					<button>svg(_alarm)</button>
					<AlarmPopUp />
				</li>
				<li className='profileBox flexBox'>
					<button type='button' className='profileButton flexBox'>
						<div className='avatarBorder showMenuPopover'>
							<div className='avatarImage'>img(_bg)</div>
						</div>
					</button>
					<span className='flexBox'>svg(_N)</span>
					<ProfilePopUp />
				</li>
				{/* leftDivision 의 앞에 division 있음, leftDivision::before */}
				<li className='flexBox leftDivision'>
					<a className='dashboardButton' href='/'>
						기업 서비스
					</a>
				</li>
				{/*화면 작아졌을 때만 나오는 햄버거 메뉴*/}
				<li>
					<button className='menuButton' type='button'>
						svg(_hamburger_menu)
					</button>
				</li>
			</ul>
		</aside>
	);
}

export default NavAsideMenu;
// GNB 의 사이드 메뉴
// 검색, 알림, 프로필...
