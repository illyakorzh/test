import { FC } from 'react';

import styled from 'styled-components';

import { Color, FontFamily, SubInfo, SubTitle } from '../Global';
import Form from './form/Form';

export const MainGoal: FC = () => {
	return (
		<MainGoalWrapper>
			<StyledSubtitle>
				Наша основна мета — позбавити себе від рутини аналізу ринку та створити справді
				якісну платформу для тестування, оптимізації та 100% автоматизації всіх торгових
				ідей. Це платформа, створена трейдерами для трейдерів.
			</StyledSubtitle>
			<MainGoalSubWrapper>
				<InfoWrapper>
					<h2>Перші 20 зареєстрованих отримають ексклюзивний доступ до платформи.</h2>
					<SubInfo>
						Якщо ви не потрапили до числа перших 20 зареєстрованих, ви отримаєте лист із
						додатковими інструкціями.
					</SubInfo>
				</InfoWrapper>
				<Form />
			</MainGoalSubWrapper>
		</MainGoalWrapper>
	);
};

const MainGoalWrapper = styled.div`
	width: 100%;
	padding: 39px 0 106px 0;
	display: flex;
	gap: 48px;
	align-items: center;
	flex-direction: column;
	@media (max-width: 375px) {
		padding: 39px 0 16px 0;
	}
`;

const StyledSubtitle = styled(SubTitle)`
	max-width: 900px;
`;

const MainGoalSubWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 20px;
	@media (max-width: 375px) {
		flex-direction: column;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 630px;
	gap: 24px;
`;
