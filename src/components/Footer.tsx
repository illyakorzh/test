import { FC } from 'react';

import styled from 'styled-components';

import { SocialIcons } from './SocialIcons';
import { FontFamily } from '../Global';

export const Footer: FC = () => {
	return (
		<StyledFooter>
			<CopyrightText>© 2024 Markets. All Rights Reserved</CopyrightText>
			<P>Присоединяйся к нашему сообществу трейдеров и инвесторов!</P>
			<SocialIcons />
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	width: 1360px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 0;
	@media (max-width: 375px) {
		flex-direction: column;
		width: 311px;
		gap: 8px;
		padding: 24px 33px;
	}
`;

const CopyrightText = styled.p`
	color: #134975;
	text-align: center;
	font-family: ${FontFamily.RedHatDisplay};
	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const P = styled.p`
	color: #fff;
	text-align: center;
	font-family: ${FontFamily.Sora};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 150% */
`;
