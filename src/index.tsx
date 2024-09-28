import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './App';
import { Global } from './Global';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<Global />
		<App />
	</>
);
