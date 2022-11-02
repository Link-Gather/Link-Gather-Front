import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './libs/ThemeProvider';
import { AppRouter } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
