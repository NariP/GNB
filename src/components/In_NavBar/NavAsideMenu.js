import React from 'react';
import AlarmPopUp from './In_NavAsideMenu/AlarmPopUp';

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
					<div>
						<div>
							<div>icon(_wanted_symbol)</div>
							<ul>
								<li>
									<a href='/' className='flexBox'>
										<span>MY 원티드</span>
									</a>
									{/*after로 파란 점 있음*/}
								</li>
								<li>
									<a href='/' className='flexBox'>
										프로필
									</a>
								</li>
								{/*after 로 division 있음*/}
								<li>
									<a href='/' className='flexBox'>
										지원현황
									</a>
								</li>
								<li>
									<a href='/' className='flexBox'>
										제안받기 현황
									</a>
								</li>
								<li>
									<a href='/' className='flexBox'>
										좋아요
									</a>
								</li>
								<li>
									<a href='/' className='flexBox'>
										북마크
									</a>
								</li>
								{/*after 로 division 있음*/}
								<li>
									<a href='/' className='flexBox'>
										추천
									</a>
								</li>
								<li>
									<a href='/' className='flexBox'>
										포인트
									</a>
								</li>
								<li>
									<a href='/' className='flexBox is-logout'>
										<span>로그아웃</span>
									</a>
								</li>
							</ul>
							{/*화면 작아졌을 때 나타나는 프로필 팝업*/}
							<ul>
								<li>
									<a href='/'>
										<span>MY 원티드</span>
										{/*span::after 파란색 점 있음*/}
										<div className='profilePic'>
											img(_bg)
											<span>svg(_N)</span>
										</div>
									</a>
								</li>
								<li>
									<a href='/'>이력서</a>
								</li>
								<li>
									<a href='/'>매치업</a>
								</li>
								<li>
									<a href='/'>추천</a>
								</li>
								<li>
									<a href='/'>지원 현황</a>
								</li>
								<li>
									<a
										href='/'
										target='_blank'
										rel='noopener noreferrer'
									>
										프리랜서
									</a>
								</li>
								<li>
									<a href='/'>직군별 연봉</a>
								</li>
								<li>
									<a href='/'>커리어 성장</a>
								</li>
								<li>
									<a href='/'>기업서비스</a>
								</li>
								<li>
									<a href='/' className='is_log-out'>
										<span>로그아웃</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
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
