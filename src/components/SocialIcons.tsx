import styled from 'styled-components';

import { ReactComponent as Facebook } from '../assets/Facebook.svg';
import { ReactComponent as Instagram } from '../assets/Instagram.svg';
import { ReactComponent as Telegram } from '../assets/Telegram.svg';
import { ReactComponent as Twitter } from '../assets/Twitter.svg';

export const SocialIcons: React.FC = () => {
	return (
		<IconsWrapper>
			<IconLink href='https://t.me'>
				<StyledIcon>
					<Telegram />
				</StyledIcon>
			</IconLink>
			<IconLink href='https://instagram.com'>
				<StyledIcon>
					<Instagram />
				</StyledIcon>
			</IconLink>
			<IconLink href='https://facebook.com'>
				<StyledIcon>
					<Facebook />
				</StyledIcon>
			</IconLink>
			<IconLink href='https://twitter.com'>
				<StyledIcon>
					<Twitter />
				</StyledIcon>
			</IconLink>
		</IconsWrapper>
	);
};

const IconsWrapper = styled.div`
	display: flex;
	gap: 32px;
	justify-content: center;
	align-items: center;
`;

const IconLink = styled.a`
	text-decoration: none;
`;

const StyledIcon = styled.div`
	display: flex;
	width: 32px;
	height: 32px;
	padding: 2px 7px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 100px;
	border: 1px solid #123248;
	background: #49b6ff;

	svg {
		width: 18px;
		height: 18px;
		fill: #123248;
	}

	&:hover {
		background: #96edff;
		box-shadow: 0px 0px 16px 0px rgba(73, 182, 255, 0.5);
	}
`;
