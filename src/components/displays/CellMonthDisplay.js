import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styled from 'styled-components';

const CellMonthDisplay = (rowData, columnData) => {
	if (rowData.monthArrayNorth.includes(columnData.monthNumber)) {
		return <CheckCircle />;
	} else {
		return;
	}
};

export default CellMonthDisplay;
const CheckCircle = styled(CheckCircleIcon)`
	&.MuiSvgIcon-root {
		color: green;
		width: 100%;
	}
`;
