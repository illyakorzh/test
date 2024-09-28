import { FC } from 'react';

import styled from 'styled-components';

import { cards } from '../data';
import { FontFamily, SubInfo, SubTitleText } from '../Global';

export const FirstStep: FC = () => {
	return (
		<Wrapper>
			<h2>Перший крок нашої платформи у світ трейдингу! Зробіть його разом із нами!</h2>
			<SubTitleText className={'subTitleText'}>Ми рухаємося до наших цілей:</SubTitleText>
			<CardsWrapper>
				{cards.map((card) => (
					<Card key={card.id}>
						<SubInfo>{card.title}</SubInfo>
						<span>{card.text}</span>
						<Number color={card.color}>{card.id}</Number>
					</Card>
				))}
			</CardsWrapper>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	h2 {
		margin-bottom: 16px;
	}
	.subTitleText {
		margin-bottom: 34px;
	}
`;
const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 25px;
	@media (max-width: 375px) {
		flex-direction: column;
	}
`;
const Card = styled.div`
	clip-path: polygon(85% 0, 100% 15%, 100% 100%, 0 100%, 0 0);
	border-radius: 20px;
	width: 360px;
	height: 320px;
	padding: 40px 28px;
	background: linear-gradient(229deg, #010101 0%, #0d273a 100%);
	display: flex;
	flex-direction: column;
	:first-child {
		margin-bottom: 16px;
	}
	:nth-child(2) {
		height: 100%;
	}
	span {
		text-align: left;
	}
	@media (max-width: 375px) {
		width: 100%;
	}
`;
const Number = styled.div<{ color: string }>`
	display: flex;
	height: 48px;
	padding: 10px;
	width: 48px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: ${({ color }) => color};
	color: #0e0c15;

	font-family: ${FontFamily.Sora};
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
`;
