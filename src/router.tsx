import { createBrowserRouter } from 'react-router-dom';
import { Complete, Home, Order, Error } from '@pages/index';

export const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'order',
				element: <Order />,
			},
			{
				path: 'complete',
				element: <Complete />,
			},
			{
				path: 'error',
				element: <Error />,
			},
		],
	},
]);
