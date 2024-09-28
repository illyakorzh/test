import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Dropdown from './Dropdown';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Color, FontFamily } from '../Global';

export const Header: FC = () => {
	const handleSelect = (value: string) => {
		console.log(`Selected country: ${value}`);
	};
	const onClick = () => console.log('click');
	return (
		<HeaderWrapper>
			<StyledLogo />
			<nav>
				<ul>
					<li>
						<Link to='#'>БЕТА ВЕРСІЯ</Link>
					</li>
					<li>
						<Link to='#'>ПЛАНУЄНО ЗРОБИТИ</Link>
					</li>
					<li>
						<Link to='#'>ЩО ВЖЕ ЗРОБЛЕНО</Link>
					</li>
					<li>
						<Link to='#'>ТРОХИ ІСТОРІЇ</Link>
					</li>
				</ul>
			</nav>
			<DropdownWrapper>
				<Dropdown options={['UA', 'RU', 'EN']} onSelect={handleSelect} />
				<StyledButton onClick={onClick}>РЕЄСТРАЦІЯ</StyledButton>
			</DropdownWrapper>
		</HeaderWrapper>
	);
};

const StyledLogo = styled(Logo)`
	width: 174.87px;
	height: 28.261px;
`;

const HeaderWrapper = styled.header`
	width: 100%;
	min-width: 1355px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
	padding: 30px 64px;
	ul {
		display: flex;
		gap: 94px;
		li {
			color: ${Color.Grey};
			text-align: center;
			font-family: ${FontFamily.SourceCodePro};
			font-size: 12px;
			font-style: normal;
			font-weight: 600;
			line-height: 20px; /* 166.667% */
			text-transform: uppercase;
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const DropdownWrapper = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

export const StyledButton = styled.button`
	color: ${Color.Black};
	background-color: ${Color.Blue};
	font-family: ${FontFamily.Sora};
	font-size: 14px;
	font-weight: 400;
	line-height: 36px; /* 257.143% */
	letter-spacing: 1.25px;
	text-transform: uppercase;
	width: 167px;
	height: 36px;
	padding: 0px 16px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		border-radius: 4px;
		background: #96edff;
		box-shadow: 0px 0px 16px 0px rgba(73, 182, 255, 0.5);
	}
`;
