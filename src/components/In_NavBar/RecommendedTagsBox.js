import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import '../../style/RecommendedTagsBox.scss';

function RecommendedTagsBox(props) {
	return (
		<div className='recommendedTagsBox'>
			<div className='container' role='presentation'>
				<h4>추천태그로 검색해보세요</h4>
				<a href='/' className='bigCompanyTag'>
					기업태그 홈 이동하기
					<IoIosArrowForward />
				</a>
				<a href='/' className='smallCompanyTag'>
					기업태그 홈
					<IoIosArrowForward />
				</a>
				<ul>
					<li>
						<button>#퇴사율5%이하</button>
					</li>
					<li>
						<button>#스터디지원</button>
					</li>
					<li>
						<button>#연봉상위2~5%</button>
					</li>
					<li>
						<button>#1,001~10,000명</button>
					</li>
					<li>
						<button>#셔틀버스</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default RecommendedTagsBox;
// GNB 의 추천태그들을 보여주는 화면
// NavSearchBox 하단에 위치하고 있는 추천태그들을 보여주는 화면
