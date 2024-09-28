import styled, { createGlobalStyle } from 'styled-components';

export enum FontFamily {
	Sora = 'Sora, sans-serif',
	Roboto = 'Roboto, sans-serif',
	RedHatDisplay = 'Red Hat Display, sans-serif',
	SourceCodePro = 'Source Code Pro, sans-serif',
}

export enum Color {
	White = '#FFF',
	Black = '#000',
	Grey = '#CAC6DD',
	Blue = '#49B6FF',
	Brainwave = '#ADA8C3',
	FSC = 'linear-gradient(229deg, #010101 0%, #0D273A 100%)',
}

export const SubTitle = styled.h3`
	color: ${Color.Grey};
	text-align: center;
	font-family: ${FontFamily.Sora};
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const SubTitleText = styled.h3`
	color: #ada8c3;
	text-align: center;

	/* Subtitle */
	font-family: ${FontFamily.Sora};
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 177.778% */
`;

export const CardText = styled.span`
	color: ${Color.White};
	font-family: ${FontFamily.Sora};
	font-size: 16px;
	font-weight: 300;
	line-height: 24px;
`;

export const SubInfo = styled.span`
	color: #ada8c3;
	text-align: center;
	font-family: ${FontFamily.Sora};
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 36px;
`;

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {


    }
    body {

    }

    html, body, #root {
        width: 100%;
        height: 100%;
        background: #050304;
        color:white
    }
    a {
        text-decoration: none;
        color:white
    }
    li {
        list-style-type: none;
    }
    h1{
        color:white;
        font-family: ${FontFamily.Sora};
        font-size: 60px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 72px */
    }
    h2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: stretch;
        color:${Color.White};
        text-align: center;
        font-family: ${FontFamily.Sora};
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 60px;
        @media (max-width: 375px) {
            font-size: 24px;
            line-height: normal;
				}
    }
`;
