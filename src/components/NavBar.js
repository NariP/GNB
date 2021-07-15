import React from 'react';

function NavBar(props) {
	return (
		<header role='presentation'>
			<div className='mediaDiv' role='presentation'>
				<nav>
					<div className='flexBox'>
						<a>svg(_logo)</a>
					</div>
					{/*메뉴들*/}
					<ul>
						<li>
							<a href='/'>홈</a>
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
							<a
								href='/'
								target='_blank'
								rel='noopener noreferrer'
							>
								프리랜서
							</a>
						</li>
						<li>
							<a href='/'>
								Ai 합격예측 <span>svg(_Beta)</span>
							</a>
						</li>
					</ul>
					<aside>
						<ul>
							<li>
								<button>svg(_search)</button>
							</li>
							<li>
								<button>svg(_alarm)</button>
								<div>
									<div>
										<ul>
											<li>
												<div>
													<div>
														<p>공지</p>
														<p>
															‘추천’이 MY 원티드로
															이동하였습니다!
															앞으로도 계속 좋은
															사람을 추천하고,
															추천 받아보세요.
														</p>
														<p>2021.07.07 (수)</p>
													</div>
												</div>
											</li>
											<li>
												<div>
													<div>
														<p>공지</p>
														<p>
															개인정보 처리방침이
															개정되었습니다.(시행일자
															: 2021.07.01)
															변경사유 : 위탁업체
															변경, 해외 보관 삭제
															등 사이트 하단 링크,
															또는 앱 내
															"설정"에서 확인
														</p>
														<p>2021.06.24 (목)</p>
													</div>
												</div>
											</li>
											<li>
												<div>
													<a
														className='flexBox'
														href='/'
														target='_blank'
													>
														<div>
															<p>공지</p>
															<p>
																6월 한달간
																'커리어에
																도움되는 400+개
																영상을
																무제한으로 볼 수
																있는 Wanted+'
																할인 행사를
																진행합니다.
																<br />- 첫 달
																결제 : 39,000원
																-> 29,000원
															</p>
															<p>
																2021.06.01 (화)
															</p>
														</div>
														<div>
															svg(_right_arrow_>)
														</div>
													</a>
												</div>
											</li>
											<li>
												<div>
													<div>
														<p>공지</p>
														<p>
															원티드 알림센터가
															오픈하였습니다! 이제
															알림센터에서
															원티드의 다양한
															알림을 놓치지 말고
															모두 확인하세요
														</p>
														<p>2021.04.05 (월)</p>
													</div>
												</div>
											</li>
										</ul>
										<div>
											일시적으로 알림을 불러올 수
											없습니다.
										</div>
										{/*말풍선 뾰족한 부분*/}
										<div> </div>
									</div>
								</div>
							</li>
							<li className='profileBox flexBox'>
								<button
									type='button'
									className='profileButton flexBox'
								>
									<div className='avatarBorder showMenuPopover'>
										<div className='avatarImage'>
											img(_bg)
										</div>
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
												<a href='flexBox is-logout'>
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
												<a
													href='/'
													className='is_log-out'
												>
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
							화면 작아졌을 때만 나오는 햄버거 메뉴
							<li>
								<button className='menuButton' type='button'>
									svg(_hamburger_menu)
								</button>
							</li>
						</ul>
					</aside>
				</nav>
			</div>
			{/*검색창*/}
			<div>
				<div>
					<form role='presentation' action='.'>
						<input
							type='search'
							placeholder='#태그, 회사, 포지션 검색'
							autoComplete='off'
							value
						/>
						<span>svg(_search)</span>
						<button type='button'>svg(_reset_x)</button>
					</form>
				</div>
			</div>
			{/*검색창 하단*/}
			<div>
				<div className='container' role='presentation'>
					<h4>추천태그로 검색해보세요</h4>
					<a href='/'>기업태그 홈 이동하기 svg(_right_arrow_>)</a>
					<ul>
						<li>#보육시설</li>
						<li>#퇴사율5%이하</li>
						<li>#안마의자</li>
						<li>#사내카페</li>
						<li>#연봉상위2~5%</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default NavBar;