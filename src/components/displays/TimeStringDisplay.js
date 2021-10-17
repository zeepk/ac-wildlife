import React from 'react';
import styled from 'styled-components';

const TimeStringDisplay = (props) => {
	const isAvailableNow =
		props.isAllDay || props.timeArray.includes(new Date().getHours());
	return (
		<TimeCell
			className="p-d-flex p-jc-center p-ai-center"
			isAvailableNow={isAvailableNow}
		>
			<TimeText>{props.timeString || 'All Day'}</TimeText>
		</TimeCell>
	);
};

export default TimeStringDisplay;

const TimeCell = styled.div`
	background-color: ${(props) => (props.isAvailableNow ? '#a1d6a1' : '')};
	height: 100%;
	width: 90px;
`;

const TimeText = styled.p``;
