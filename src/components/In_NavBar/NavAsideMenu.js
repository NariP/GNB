import React from 'react';
import '../../style/NavAsideMenu.scss';
import { HiOutlineSearch, HiOutlineMenu } from 'react-icons/hi';
import { VscBell } from 'react-icons/vsc';
import { AlarmPopUp, ProfilePopUp } from './In_NavAsideMenu';

function NavAsideMenu(props) {
	return (
		<aside>
			<ul className='navAsideMenu'>
				<li className='iconBtn'>
					<button>
						<HiOutlineSearch className='searchIcon' />
					</button>
				</li>
				<li className='iconBtn'>
					<button>
						<VscBell className='alarmIcon' />
					</button>
					<AlarmPopUp />
				</li>
				<li className='profileBox'>
					<button
						type='button'
						className='profileButton'
						aria-label='avatar-button'
					>
						<div className='avatarBorder showMenuPopover'>
							<div className='avatarImage' />
						</div>
					</button>
					<span className='newBadge'>N</span>
					<ProfilePopUp />
				</li>
				<li className='leftDivision'>
					<a className='dashboardButton' href='/'>
						기업 서비스
					</a>
				</li>
				{/*화면 작아졌을 때만 나오는 햄버거 메뉴*/}
				<li>
					<button type='button'>
						<HiOutlineMenu className='menuIcon' />
					</button>
				</li>
			</ul>
		</aside>
	);
}

export default NavAsideMenu;
// GNB 의 사이드 메뉴
// 검색, 알림, 프로필...
