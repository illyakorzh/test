import React, { FC } from 'react';

import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/BETA VERSION LAUNCH/logo_wh 1.svg';
import { ReactComponent as MCV1 } from '../../assets/what have aready done/MCV/MCV1.svg';
import { ReactComponent as MCV2 } from '../../assets/what have aready done/MCV/MCV2.svg';
import { ReactComponent as MCV3 } from '../../assets/what have aready done/MCV/MCV3.svg';
import { ReactComponent as MCV4 } from '../../assets/what have aready done/MCV/MCV4.svg';
import { betaVersionData } from '../../data';
import { Color, FontFamily } from '../../Global';
export const MainCircle: FC = () => {
	return (
		<MainWrapper>
			<StyledMCV1 />
			<StyledMCV2 />
			<StyledMCV3 />
			<StyledMCV4 />
			<MainCircleWrap>
				{betaVersionData.map((item, index) => {
					const { left, top } = calculatePosition(index, betaVersionData.length, 370);
					return (
						<Wrapper key={index} style={{ left, top }}>
							{React.createElement(item.icon, { id: `iconId${index}` })}
							<Text>{item.text}</Text>
						</Wrapper>
					);
				})}
				<CenterCircle>
					<StyledLogo />
				</CenterCircle>
			</MainCircleWrap>
		</MainWrapper>
	);
};

const calculatePosition = (index: number, totalItems: number, radius: number) => {
	const angle = (index / totalItems) * 2 * Math.PI - Math.PI / 2;
	const x = radius + radius * Math.cos(angle) - 60;
	const y = radius + radius * Math.sin(angle) - 42.5;
	return { left: `${x}px`, top: `${y}px` };
};
const commonMVC = `
    @media (max-width: 375px) {
        display: none;
    }
    
    position: absolute;
`;
const StyledMCV1 = styled(MCV1)`
	${commonMVC};
	left: -270px;
	bottom: 120px;
`;
const StyledMCV2 = styled(MCV2)`
	${commonMVC};
	top: -180px;
	left: 105px;
`;
const StyledMCV3 = styled(MCV3)`
	${commonMVC};
	top: -180px;
	left: 470px;
`;
const StyledMCV4 = styled(MCV4)`
	${commonMVC};
	bottom: -150px;
	right: -295px;
`;

const MainWrapper = styled.div`
	position: relative;
`;

const MainCircleWrap = styled.div`
	width: 741.492px;
	height: 741.492px;
	border-radius: 50%;
	border: 1px dashed #8fbdfb;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 375px) {
		width: 100%;
		height: 100%;
		border-radius: 0;
		display: flex;
		flex-wrap: wrap;
		border: none;
	}
`;

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 375px) {
		position: static;
		svg {
			width: 147px;
			height: 105px;
		}
	}
`;

const CenterCircle = styled.div`
	width: 457.528px;
	height: 457.528px;
	border-radius: 50%;
	border: 1px solid #8fbdfb;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 375px) {
		display: none;
	}
`;

export const Text = styled.span`
	width: 130px;
	color: ${Color.White};
	font-family: ${FontFamily.Sora};
	font-size: 14px;
	font-weight: 300;
	line-height: 24px;
	text-align: left;
`;

const StyledLogo = styled(Logo)`
	width: 180.419px;
	height: 152.613px;
`;
