import { FC } from 'react';

import styled from 'styled-components';

import { FirstStep } from './FirstStep';
import { MainGoal } from './MainGoal';
import { Participate } from './Participate';
import { TheBirthOfPlatform } from './TheBirthOfPlatform/TheBirthOfPlatform';
import { WhatHasBeenDone } from './WhatHasBeenDone/WhatHasBeenDone';

export const Main: FC = () => {
	return (
		<MainWrapper>
			<Participate />
			{/*<FirstStep />*/}
			{/*<WhatHasBeenDone />*/}
			{/*<TheBirthOfPlatform />*/}
			{/*<MainGoal />*/}
		</MainWrapper>
	);
};
const MainWrapper = styled.main`
	overflow: hidden;
	flex: 1 1 auto;
	width: 1360px;
	@media (max-width: 375px) {
		width: 311px;
	}
`;
