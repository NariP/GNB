import React from 'react';
import PropTypes from 'prop-types';
import '../../style/NavAsideMenu.scss';
import { HiOutlineSearch, HiOutlineMenu } from 'react-icons/hi';
import { VscBell } from 'react-icons/vsc';
import { AlarmPopUp, ProfilePopUp } from './In_NavAsideMenu';
import ProfilePopUpSmall from './In_NavAsideMenu/ProfilePopUpSmall';

NavAsideMenu.prototype = {
	alarmPopUpState: PropTypes.bool,
	profilePopUpState: PropTypes.bool,
	showSearchBox: PropTypes.func, // () => void
	setAlarmPopUpState: PropTypes.func, // () => void
	setProfilePopUpState: PropTypes.func, // () => void
	showProfilePopUp: PropTypes.func, // () => void
};

function NavAsideMenu({
	alarmPopUpState,
	profilePopUpState,
	showSearchBox,
	setAlarmPopUpState,
	setProfilePopUpState,
	showProfilePopUp,
}) {
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
						className='profileBtn'
						aria-label='avatar-button'
						onClick={() =>
							setProfilePopUpState(
								(profilePopUpState) => !profilePopUpState,
							)
						}
					>
						<div
							className={`avatarBorder ${
								profilePopUpState && 'showMenuPopover'
							}`}
						>
							<div className='avatarImage' />
						</div>
					</button>
					<span className='newBadge'>N</span>
					{profilePopUpState && <ProfilePopUp />}
				</li>
				<li className='leftDivision'>
					<a className='dashboardButton' href='/'>
						기업 서비스
					</a>
				</li>
				{/*화면 작아졌을 때만 나오는 햄버거 메뉴*/}
				<li data-group='profileGroup'>
					<button
						type='button'
						data-group='profileGroup'
						onClick={showProfilePopUp}
					>
						<HiOutlineMenu
							className='menuIcon'
							data-group='profileGroup'
						/>
					</button>
				</li>
			</ul>
			{profilePopUpState && <ProfilePopUpSmall />}
		</aside>
	);
}

export default NavAsideMenu;
// GNB 의 사이드 메뉴
// 검색, 알림, 프로필...
