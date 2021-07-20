import React from 'react';
import '../../../style/AlarmPopUp.scss';
import AlarmList from './AlarmList';
import { alarms } from '../../../utils/apiText';

function AlarmPopUp(props) {
	return (
		<div className='alarmPopUp' data-group='notiGroup'>
			<div data-group='notiGroup'>
				<div data-group='notiGroup'>
					<ul data-group='notiGroup'>
						{alarms.map(({ id, contents, date, isOuterLink }) => (
							<AlarmList
								key={id.toString()}
								contents={contents}
								date={date}
								isOuterLink={isOuterLink}
							/>
						))}
					</ul>
					<div data-group='notiGroup' style={{ display: 'none' }}>
						일시적으로 알림을 불러올 수 없습니다.
					</div>
					{/*말풍선 뾰족한 부분*/}
					<div className='bubbleTail' data-group='notiGroup'>
						{' '}
					</div>
				</div>
			</div>
		</div>
	);
}
export default AlarmPopUp;
// GNB 알람 아이콘 클릭시 나오는 알람내역이 보이는 창
