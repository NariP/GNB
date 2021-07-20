import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../style/NavAsideMenu.scss';
import { HiOutlineSearch, HiOutlineMenu } from 'react-icons/hi';
import { VscBell } from 'react-icons/vsc';
import { AlarmPopUp, ProfilePopUp } from './In_NavAsideMenu';

NavAsideMenu.prototype = {
	showSearchBox: PropTypes.func, // () => void
	alarmPopUpState: PropTypes.bool,
	setAlarmPopUpState: PropTypes.func, // () => void
};

function NavAsideMenu({ alarmPopUpState, showSearchBox, setAlarmPopUpState }) {
	return (
		<aside>
			<ul className='navAsideMenu'>
				<li className='iconBtn'>
					<button>
						<HiOutlineSearch
							className='searchIcon'
							onClick={showSearchBox}
						/>
					</button>
				</li>
				<li className='iconBtn'>
					<button
						className={`alarmBtn ${alarmPopUpState && 'activeBg'}`}
						onClick={() =>
							setAlarmPopUpState(
								(alarmPopUpState) => !alarmPopUpState,
							)
						}
					>
						<VscBell className='alarmIcon' />
					</button>
					{alarmPopUpState && <AlarmPopUp />}
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
