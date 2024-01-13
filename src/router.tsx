import { createBrowserRouter } from 'react-router-dom';
import { Home, Order } from '@pages/index';

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
		],
	},
]);
