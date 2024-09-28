import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as IconSmall } from '../assets/hero 1 (1).svg';
import { ReactComponent as IconLarge } from '../assets/hero 1.svg';

export const ResponsiveIcon = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 375);

	const updateMedia = () => {
		setIsSmallScreen(window.innerWidth < 376);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);

	return isSmallScreen ? <StyledIconSM /> : <StyledIconBG />;
};
const StyledIconSM = styled(IconSmall)`
	z-index: 1;
`;
const StyledIconBG = styled(IconLarge)`
	z-index: 1;
`;
