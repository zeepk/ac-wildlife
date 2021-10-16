import React from 'react';
import styled from 'styled-components';
import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingScreen = () => {
	return (
		<LoadingContainer>
			<ProgressSpinner strokeWidth="4" />
		</LoadingContainer>
	);
};

export default LoadingScreen;

const LoadingContainer = styled.div`
	min-height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
`;
