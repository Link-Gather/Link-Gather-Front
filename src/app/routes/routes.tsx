import { HomeScreen, LoginScreen, OauthCallbackScreen } from '@screens';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_LOGIN, ROUTE_OAUTH } from './const';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={ROUTE_LOGIN} element={<LoginScreen />} />
      <Route path={'/oauth'} loader={(args) => console.log(args)} element={<OauthCallbackScreen />} />
      <Route path={ROUTE_OAUTH} loader={(args) => console.log(args)} element={<OauthCallbackScreen />} />
    </Routes>
  );
}

export { AppRouter };
