import React, { FC } from 'react';

import styled from 'styled-components';

import { Text } from './MainCircle';
import { ReactComponent as Vector1 } from '../../assets/BETA VERSION LAUNCH/Vector1.svg';
import { ReactComponent as Vector21 } from '../../assets/BETA VERSION LAUNCH/Vector2.1.svg';
import { ReactComponent as Vector22 } from '../../assets/BETA VERSION LAUNCH/Vector2.2.svg';
import { ReactComponent as Vector23 } from '../../assets/BETA VERSION LAUNCH/Vector2.3.svg';
import { ReactComponent as Vector24 } from '../../assets/BETA VERSION LAUNCH/Vector2.4.svg';
import { ReactComponent as Vector25 } from '../../assets/BETA VERSION LAUNCH/Vector2.5.svg';
import { ReactComponent as Vector26 } from '../../assets/BETA VERSION LAUNCH/Vector2.6.svg';
import { ReactComponent as Vector2 } from '../../assets/BETA VERSION LAUNCH/Vector2.svg';
import { ReactComponent as Vector3 } from '../../assets/BETA VERSION LAUNCH/Vector3.svg';
import { ReactComponent as Vector4 } from '../../assets/BETA VERSION LAUNCH/Vector4.svg';
import { ReactComponent as Vector5 } from '../../assets/BETA VERSION LAUNCH/Vector5.svg';
import { ReactComponent as Vector6 } from '../../assets/BETA VERSION LAUNCH/Vector6.svg';
import { ReactComponent as Vector7 } from '../../assets/BETA VERSION LAUNCH/Vector7.svg';
import { ReactComponent as Vector8 } from '../../assets/BETA VERSION LAUNCH/Vector8.svg';
import { whatHasBeenDoneData } from '../../data';

export const CardWrap: FC = () => {
	return (
		<CardWrapper>
			{whatHasBeenDoneData.map((el, index) => (
				<CardSubWrapper key={index}>
					{el.map((card) => (
						<Card key={card.text} color={card.background}>
							<card.icon />
							<Text>{card.text}</Text>
						</Card>
					))}
				</CardSubWrapper>
			))}
			<StyledVector1 />
			<StyledVector2 />
			<StyledVector3 />
			<StyledVector4 />
			<StyledVector5 />
			<StyledVector6 />
			<StyledVector7 />
			<StyledVector8 />
			<StyledVector21 />
			<StyledVector22 />
			<StyledVector23 />
			<StyledVector24 />
			<StyledVector25 />
			<StyledVector26 />
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	margin-top: 52px;
	display: flex;
	gap: 25px;
	padding-bottom: 140px;
	position: relative;
	@media (max-width: 375px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 112px;
		width: 100%;
		gap: 16px;
	}
`;

const CardSubWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 56px;
	&:nth-child(odd) {
		margin-top: 72px;
	}

	@media (max-width: 375px) {
		gap: 16px;
		width: 100%;
		&:nth-of-type(odd) {
			margin-top: 0;
		}
	}
`;

const Card = styled.div<{ color: string }>`
	display: flex;
	height: 200px;
	padding: 16px 8px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	width: 262px;
	border-radius: 16px;
	border: 1px solid #8fbdfb;
	background: ${({ color }) => color};
	z-index: 1;
	span {
		width: 100%;
	}
	@media (max-width: 375px) {
		width: 100%;
		height: 170px;
		padding: 8px 24px 16px 24px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 24px;
		align-self: stretch;
	}
`;

const commonStyledVector = `
	position: absolute;
	bottom: 0;
	@media (max-width: 375px) {
		display:none
	}
`;
const StyledVector1 = styled(Vector1)`
	${commonStyledVector};
	left: 120px;
`;
const StyledVector2 = styled(Vector2)`
	${commonStyledVector};
	left: 170px;
`;
const StyledVector3 = styled(Vector3)`
	${commonStyledVector};
	left: 365px;
`;
const StyledVector4 = styled(Vector4)`
	${commonStyledVector};
	left: 414px;
`;
const StyledVector5 = styled(Vector5)`
	${commonStyledVector};
	left: 605px;
`;
const StyledVector6 = styled(Vector6)`
	${commonStyledVector};
	left: 645px;
`;
const StyledVector7 = styled(Vector7)`
	${commonStyledVector};
	left: 748px;
`;
const StyledVector8 = styled(Vector8)`
	${commonStyledVector};
	left: 821px;
`;

const commonStyledVector2 = `
	position: absolute;
	bottom: 0;
	display: none;
	@media (max-width: 375px) {
		display:block
	}
`;
const StyledVector21 = styled(Vector21)`
	${commonStyledVector2};
	left: 20px;
`;
const StyledVector22 = styled(Vector22)`
	${commonStyledVector2};
	left: 60px;
	display: none;
`;
const StyledVector23 = styled(Vector23)`
	${commonStyledVector2};
	left: 97px;
	display: none;
`;
const StyledVector24 = styled(Vector24)`
	${commonStyledVector2};
	left: 136px;
	display: none;
`;
const StyledVector25 = styled(Vector25)`
	${commonStyledVector2};
	left: 212px;
	display: none;
`;
const StyledVector26 = styled(Vector26)`
	${commonStyledVector2};
	left: 250px;
	display: none;
`;
