import React, { FC } from 'react';

import styled from 'styled-components';

import { ResponsiveIcon } from './ResponsiveIcon';
import { ReactComponent as Circle1 } from '../assets/Circles/Circle1.svg';
import { ReactComponent as Line } from '../assets/Line.svg';
import { Color, FontFamily, SubTitleText } from '../Global';
import { StyledButton } from './Header';

export const Participate: FC = () => {
	return (
		<StyledWrapper>
			<h1>Візьміть участь у бета-тестуванні платформи для платформи трейдингу MARKETS</h1>
			<SubTitleText className={'subTitleText'}>
				Впливайте на розвиток платформи та закріпіть за собою особливу знижку на
				просунутий функціонал у майбутньому
			</SubTitleText>
			<StyledButton>РЕЄСТРАЦІЯ</StyledButton>
			<ResponsiveIcon />
			<StyledLine />
			<StyledCircle1 />
			<StyledCircle2 />
			<StyledCircle3 />
			<StyledCircle4 />
		</StyledWrapper>
	);
};
const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;

	h1 {
			z-index: 1;
			margin-top: 64px;
			max-width: 1130px;
		color: ${Color.White});
		text-align: center;
		/* H1 */
		font-family: ${FontFamily.Sora});
		font-size: 60px;
		font-style: normal;
		font-weight: 600;
		line-height: 120%; /* 72px */
	} 
		button{margin-bottom: 30px;}
		.subTitleText{
				margin: 16px 0;
        z-index: 1;
    }
		@media (min-width: 375px) {
				h1 {
            font-size: 32px;
            line-height: normal;
            margin-top: 24px;
        }
    }
`;
const StyledLine = styled(Line)`
	position: absolute;
	@media (max-width: 375px) {
		top: 240px;
	}
`;
const commonStyledCircle = `
position: absolute;
	top: 50%;
	height: 50%;
	position: absolute;
		transform: translateY(-50%);
		  z-index: 0;
`;
const StyledCircle1 = styled(Circle1)`
	${commonStyledCircle};
	width: 896.278px;
	height: 896.278px;
	@media (min-width: 375px) {
		width: 545px;
		height: 545px;
	}
`;
const StyledCircle2 = styled(Circle1)`
	${commonStyledCircle};
	width: 698.995px;
	height: 698.995px;
	@media (min-width: 375px) {
		width: 425px;
		height: 425px;
	}
`;
const StyledCircle3 = styled(Circle1)`
	${commonStyledCircle};
	width: 491.507px;
	height: 491.507px;
	@media (min-width: 375px) {
		width: 298px;
		height: 298px;
	}
`;
const StyledCircle4 = styled(Circle1)`
	${commonStyledCircle};
	width: 314.633px;
	height: 314.633px;
	@media (min-width: 375px) {
		width: 191px;
		height: 191px;
	}
`;
