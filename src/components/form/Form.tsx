import React, { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import {
	EmailField,
	ErrorMessage,
	FormWrapper,
	Google,
	Header,
	PasswordField,
	PasswordSubWrapper,
	PasswordWrapper,
	StyledForm,
	StyledGoogleImg,
	StyledInputCheck,
	StyledLable,
	SubmitButton,
	ToggleButton,
	UnderFormInfo,
	WrapperErrorMessage,
} from './style';
import { ReactComponent as ClosedEye } from '../../assets/ClosedEye.svg';
import { ReactComponent as OpenEye } from '../../assets/OpenEye.svg';

type Inputs = {
	email: string;
	password: string;
	passwordConfirmation: string;
};

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		watch,
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

	return (
		<FormWrapper>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<Header>РЕЄСТРАЦІЯ</Header>

				<PasswordWrapper>
					<StyledLable>Enter your e-mail*</StyledLable>
					<PasswordSubWrapper>
						<EmailField
							type='email'
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Invalid email format',
								},
							})}
						/>
						{!errors.email &&
							watch('email') &&
							/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(watch('email')) && (
								<StyledInputCheck />
							)}
					</PasswordSubWrapper>
					{errors.email && watch('email').length && (
						<ErrorMessage>{errors.email.message}</ErrorMessage>
					)}
				</PasswordWrapper>

				<PasswordWrapper>
					<StyledLable>Create new password*</StyledLable>
					<PasswordSubWrapper>
						<PasswordField
							type={showPassword ? 'text' : 'password'}
							{...register('password', {
								required: 'Password is required',
								pattern: {
									value:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/,
									message:
										'Password must be at least 6 characters long, contain upper- and lower-case letters, a digit, and a special character',
								},
							})}
						/>
						<ToggleButton onClick={() => setShowPassword(!showPassword)}>
							{!showPassword ? <ClosedEye /> : <OpenEye />}
						</ToggleButton>
					</PasswordSubWrapper>
					{errors.password?.message && (
						<WrapperErrorMessage>
							<ErrorMessage>{'should be at least 6 characters long'}</ErrorMessage>
							<ErrorMessage>
								{'should contain both upper- and lower-case characters'}
							</ErrorMessage>
							<ErrorMessage>
								{'should contain punctuation characters and digits'}
							</ErrorMessage>
						</WrapperErrorMessage>
					)}
				</PasswordWrapper>

				<PasswordWrapper>
					<StyledLable>Confirm your password*</StyledLable>
					<PasswordSubWrapper>
						<PasswordField
							type={showPasswordConfirmation ? 'text' : 'password'}
							{...register('passwordConfirmation', {
								required: 'Password confirmation is required',
								validate: (value) =>
									value === getValues('password') || 'Passwords do not match',
							})}
						/>
						<ToggleButton
							onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
						>
							{!showPasswordConfirmation ? <ClosedEye /> : <OpenEye />}
						</ToggleButton>
					</PasswordSubWrapper>
					{errors.passwordConfirmation?.message && (
						<ErrorMessage>{errors.passwordConfirmation?.message}</ErrorMessage>
					)}
				</PasswordWrapper>

				<SubmitButton type='submit' />

				<Google>
					<StyledGoogleImg />
					Continue with Google
				</Google>
			</StyledForm>
			<UnderFormInfo>
				*Зареєструвавшись ви отримаєте лист із деталями доступу
			</UnderFormInfo>
		</FormWrapper>
	);
}
