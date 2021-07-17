const menus = [
	[
		'영업',
		'기업영업',
		'외부영업',
		'영업 관리자',
		'기술영업',
		'주요고객사 담당자',
		'솔루션 컨설턴트',
		'해외영업',
	],
	[
		'미디어',
		'콘텐츠 크리에이터',
		'PD',
		'영상 편집가',
		'에디터',
		'비디오 제작',
		'작가',
		'출판 기획자',
	],
	[
		'인사',
		'인사담당',
		'리쿠르터',
		'조직문화',
		'평가·보상',
		'헤드헌터',
		'HRBP',
		'HRD',
	],
	[
		'게임 제작',
		'게임 그래픽 디자이너',
		'모바일 게임 개발자',
		'게임 아티스트',
		'게임 클라이언트 개발자',
		'게임 서버 개발자',
		'유니티 개발자',
	],
	[
		'엔지니어링 설계',
		'전자 엔지니어',
		'기계 엔지니어',
		'전기 엔지니어',
		'전기기계 공학자',
		'로봇 자동화',
		'QA 엔지니어',
		'제품 엔지니어',
	],
];
const bigMenu = [
	'금융',
	'제조·생산',
	'물류·무역',
	'의료·제약·바이오',
	'교육',
	'식·음료',
	'건설·시설',
	'공공·복지',
];

const popUpMenu = [
	'MY 원티드',
	'프로필',
	'지원현황',
	'제안받기 현황',
	'좋아요',
	'북마크',
	'추천',
	'포인트',
	'로그아웃',
];

const popUpMenuSmall = [
	{ name: 'MY 원티드', isOuterLink: false },
	{ name: '프로필', isOuterLink: false },
	{ name: '이력서', isOuterLink: false },
	{ name: '매치업', isOuterLink: false },
	{ name: '추천', isOuterLink: false },
	{ name: '지원 현황', isOuterLink: false },
	{ name: '프리랜서', isOuterLink: true },
	{ name: '직군별 연봉', isOuterLink: false },
	{ name: '커리어 성장', isOuterLink: false },
	{ name: '기업 서비스', isOuterLink: false },
	{ name: '로그아웃', isOuterLink: false },
];

export { menus, bigMenu, popUpMenu, popUpMenuSmall };
