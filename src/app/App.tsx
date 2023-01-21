import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@libs/query';
import { ThemeProvider } from '@libs/theme';
import { AppRouter } from './routes/routes';
import { AuthProvider } from './libs/auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
