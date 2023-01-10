import { HomeScreen, LoginScreen } from '@screens';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_LOGIN } from './const';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={ROUTE_LOGIN} element={<LoginScreen />} />
    </Routes>
  );
}

export { AppRouter };
