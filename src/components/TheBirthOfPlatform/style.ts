import styled from 'styled-components';

import { ReactComponent as LeftCorner } from '../../assets/LeftCorner.svg';
import { ReactComponent as RightCorner } from '../../assets/RightCorner.svg';

export const WrapperTheBirthOfPlatform = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	@media (max-width: 375px) {
	}
`;

export const Header = styled.div`
	max-width: 900px;
	align-self: center;
	gap: 16px;
	margin-bottom: 32px;
	@media (max-width: 375px) {
		width: 100%;
		h2 {
			font-size: 24px;
		}
	}
`;

export interface WrapperCardProps {
	mr: string;
}

export const WrapperCard = styled.div<WrapperCardProps>`
	display: flex;
	margin-right: ${({ mr }) => mr};
	@media (max-width: 375px) {
		margin: 0;
	}
`;

interface CardProps {
	background: string;
}

export const Card = styled.div<CardProps>`
	display: flex;
	width: 670px;
	padding: 38px;
	justify-content: center;
	align-items: center;
	gap: 32px;
	//
	border-radius: 16px;
	border: 1px solid #8fbdfb;
	background: ${({ background }) => background};
	margin-bottom: 75px;
	@media (max-width: 375px) {
		flex-direction: column;
		width: 311px;
		padding: 24px;
		margin-bottom: 32px;
	}
`;

interface ImageProps {
	width: string;
	height: string;
}

export const StyledImage = styled.div<ImageProps>`
	width: fit-content;
	height: fit-content;
	svg {
		width: ${({ width }) => width};
		height: ${({ height }) => height};
	}
`;

export const commonStyledCorner = `
 	align-self: end;
	@media (max-width: 375px) {
		display: none;
	}
 `;

export const StyledRightCorner = styled(RightCorner)`
	${commonStyledCorner}
`;

export const StyledRightLeftCorner = styled(LeftCorner)`
	${commonStyledCorner}
`;
