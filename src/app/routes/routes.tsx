import { HomeScreen, LoginScreen, OauthCallbackScreen, SignUpScreen } from '@screens';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_LOGIN, ROUTE_OAUTH, ROUTE_SIGN_UP } from './const';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={ROUTE_LOGIN} element={<LoginScreen />} />
      <Route path={ROUTE_OAUTH} element={<OauthCallbackScreen />} />
      <Route path={ROUTE_SIGN_UP} element={<SignUpScreen />} />
    </Routes>
  );
}

export { AppRouter };
