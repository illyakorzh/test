import styled from 'styled-components';

import { ReactComponent as GoogleImg } from '../../assets/Google.svg';
import { ReactComponent as InputCheck } from '../../assets/InputCheck.svg';
import { Color, FontFamily } from '../../Global';

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
`;

export const StyledForm = styled.form`
	padding: 0 64px 48px;
	display: flex;
	width: 555px;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	border-radius: 12px;
	background: linear-gradient(229deg, #010101 0%, #0d273a 100%);
	@media (max-width: 375px) {
		padding: 0 16px 48px;
		width: 100%;
	}
`;

export const Header = styled.div`
	color: ${Color.White};
	font-family: ${FontFamily.Roboto};
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 1.25px;
	text-transform: uppercase;
	width: 239px;
	padding: 16px 10px;
	text-align: center;
`;

export const PasswordWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const PasswordSubWrapper = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
`;

export const StyledLable = styled.label`
	align-self: start;
	color: #666;
	font-family: ${FontFamily.RedHatDisplay};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 26px; /* 162.5% */
	width: auto;
`;

export const commonInputStyles = `
	width: 100%;
display: flex;
height: 48px;
padding: 16px 24px;
border-radius: 8px;
border: 1px solid #424951;
background: #111E27;
font-family:  ${FontFamily.RedHatDisplay};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
 &:focus {
  border-color:  #49B6FF;
  outline: none; 
  border-radius: 8px;
  background-color: #111E27;;
  }
`;

export const EmailField = styled.input`
	${commonInputStyles};
	color: ${Color.White};
`;

export const PasswordField = styled.input.attrs({ type: 'password' })`
	${commonInputStyles};
	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}
	color: #8a8b92;
`;

export const commonIcon = `
	position: absolute;
	right: 10px;
	top: 25%;
	cursor: pointer;
`;

export const ToggleButton = styled.span`
	${commonIcon};
`;

export const StyledInputCheck = styled(InputCheck)`
	${commonIcon};
`;

export const commonButtonStyles = `
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 8px;
	text-transform: uppercase;
		width: 100%;
`;

export const SubmitButton = styled.input`
	${commonButtonStyles};
	color: #000509;
	background: #49b6ff;
	&:hover {
		background: #96edff;
		box-shadow: 0px 0px 16px rgba(73, 182, 255, 0.5);
	}
`;

export const Google = styled.button`
	${commonButtonStyles};
	border: 1px solid #49b6ff;
	background-color: transparent;
	color: ${Color.White};

	&:hover {
		border-color: #96edff;
		box-shadow: 0px 0px 16px rgba(73, 182, 255, 0.5);
	}
`;

export const StyledGoogleImg = styled(GoogleImg)`
	width: 24px;
	height: 24px;
`;

export const UnderFormInfo = styled.span`
	color: ${Color.White};
	font-family: ${FontFamily.Roboto};
	font-size: 14px;
	letter-spacing: 1.25px;
`;

export const WrapperErrorMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-self: start;
`;

export const ErrorMessage = styled.span`
	color: #666;
	font-family: ${FontFamily.RedHatDisplay};
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 100%; /* 14px */
	letter-spacing: -0.7px;
`;
