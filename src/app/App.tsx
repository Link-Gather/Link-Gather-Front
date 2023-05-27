import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@libs/query';
import { ThemeProvider } from '@libs/theme';
import { AppRouter } from '@routes';
import { AuthProvider } from '@libs/auth';
import { StackProvider } from '@libs/stacks';
import { CssBaseline } from '@mui/material';
import { Header } from '@components';

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
          <StackProvider>
            <ThemeProvider>
              <CssBaseline />
              {/* FIXME: 레이아웃 나누기전에 확인용 */}
              <Header />
              <AppRouter />
            </ThemeProvider>
          </StackProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
