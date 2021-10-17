import React from 'react';
import styled from 'styled-components';
import { noCrittersMessage } from '../../utils/constants';

const NoCritters = () => {
	return (
		<NoneContainer>
			<NoneText>{noCrittersMessage}</NoneText>
		</NoneContainer>
	);
};

export default NoCritters;

const NoneContainer = styled.div`
	margin: 10vh 1rem 10vh 1rem;
	min-height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const NoneText = styled.p`
	font-size: 2rem;
	color: var(--pink);
	background-color: white;
	padding: 1rem;
	border-radius: 3rem;
`;
