import React from 'react';

function RecommendedTagsBox(props) {
	return (
		<div style={{ display: 'none' }}>
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
	);
}

export default RecommendedTagsBox;
// GNB 의 추천태그들을 보여주는 화면
// NavSearchBox 하단에 위치하고 있는 추천태그들을 보여주는 화면
