import { FC } from 'react';

import {
	Card,
	Header,
	StyledImage,
	StyledRightCorner,
	StyledRightLeftCorner,
	WrapperCard,
	WrapperTheBirthOfPlatform,
} from './style';
import { TheBirthOfPlatformData } from '../../data';
import { CardText, SubTitleText } from '../../Global';

export const TheBirthOfPlatform: FC = () => {
	return (
		<WrapperTheBirthOfPlatform>
			<Header>
				<h2>Як народжувалась платформа</h2>
				<SubTitleText>
					Мене звати Владислав Шевченко, я ідейний натхненник і співзасновник платформи
					Markets, трейдер з 12-річним досвідом і творець проєктів "Криптоманіяки",
					"Криптосекта" та "Trading Algorithms". Запуск бета-версії відбувся у 2024 році,
					але фундамент було закладено набагато раніше.
				</SubTitleText>
			</Header>
			{TheBirthOfPlatformData.map((card) => {
				const shouldISddCorner = typeof card.rightCorner !== 'undefined';
				return (
					<WrapperCard key={card.year} mr={card.marginRight}>
						{card.rightCorner && <StyledRightLeftCorner />}
						<Card background={card.background}>
							<CardText>{card.text}</CardText>
							<StyledImage width={card.imgW} height={card.imgH}>
								<card.image />
							</StyledImage>
						</Card>
						{shouldISddCorner && !card.rightCorner && <StyledRightCorner />}
					</WrapperCard>
				);
			})}
		</WrapperTheBirthOfPlatform>
	);
};
