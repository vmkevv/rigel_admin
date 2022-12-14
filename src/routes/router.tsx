import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

import AppShell from './AppShell';
import Login from './Login';
import Teachers from './Teachers';
import Teacher from './Teacher';
import Home from './Home';

const router = createBrowserRouter([
	{
		path: routes.root(),
		element: <AppShell />,
		children: [
			{
				path: routes.home(),
				element: <Home />,
			},
			{
				path: routes.teachers(),
				element: <Teachers />,
			},
			{
				path: routes.teacher(':id'),
				element: <Teacher />,
			},
		],
	},
	{ path: routes.login(), element: <Login /> },
]);

export default router;
