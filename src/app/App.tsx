import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <div id='portal-root'></div>
    </BrowserRouter>
  );
}

export default App;
