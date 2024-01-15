import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { GlobalStyle } from '@components/common';
import { ProductProvider } from './context';

const queryClient = new QueryClient();

function App() {
	return (
		<ProductProvider>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ProductProvider>
	);
}

export default App;
