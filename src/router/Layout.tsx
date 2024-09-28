import { FC } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Layout: FC = () => (
	<Wrapper>
		{/*<Header />*/}
		<Outlet />
		<Footer />
	</Wrapper>
);

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	width: 100%;
	flex-direction: column;
`;
