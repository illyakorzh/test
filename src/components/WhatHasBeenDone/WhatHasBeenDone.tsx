import React from 'react';

import styled from 'styled-components';

import { CardWrap } from './CardWrap';
import { MainCircle } from './MainCircle';
import { SubTitleText } from '../../Global';

export const WhatHasBeenDone: React.FC = () => {
	return (
		<WhatHasBeenDoneWrapper>
			<h2>Що вже зроблено</h2>
			<SubTitleText>З 2020 по 2024 рік було зроблено:</SubTitleText>
			<CardWrap />
			<MiddleInfo>
				<div className={'middleInfoWrapper'}>
					<h2>ЗАПУСК БЕТА ВЕРСІЇ</h2>
					<SubTitleText>15 вересня 2024 року</SubTitleText>
				</div>
				<h2>У найближчі 6 місяців планується зробити:</h2>
			</MiddleInfo>
			<MainCircle />
		</WhatHasBeenDoneWrapper>
	);
};

const WhatHasBeenDoneWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 150px 0;
	flex-direction: column;
	@media (max-width: 375px) {
		padding: 16px 0;
	}
	h2 {
		margin-bottom: 20px;
	}
	:nth-child(2n) {
	}
`;

const MiddleInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	align-items: center;
	padding-bottom: 70px;
	@media (max-width: 375px) {
		padding-bottom: 48px;
	}
	.middleInfoWrapper {
		display: flex;
		width: 670px;
		padding: 16px 0;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		border-radius: 16px;
		border: 1px solid #8fbdfb;
		background: linear-gradient(229deg, #010101 0%, #0d273a 100%);
		@media (max-width: 375px) {
			width: 100%;
		}
	}
`;
