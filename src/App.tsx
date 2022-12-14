import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from './routes/router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 20, // 20 minutes
		},
	},
});

function App() {
	return (
		<MantineProvider
			theme={{
				black: '#22325e',
				fontFamily: 'Roboto, sans-serif',
				headings: { fontFamily: 'Roboto, sans-serif' },
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</MantineProvider>
	);
}
export default App;
