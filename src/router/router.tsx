import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { Main } from '../components/Main';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ path: '/', element: <Main /> }],
	},
]);
