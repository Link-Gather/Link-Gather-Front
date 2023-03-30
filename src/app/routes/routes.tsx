import { Route, Routes } from 'react-router-dom';
import { Layout } from '@elements';
import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  OauthCallbackScreen,
  ForgotPasswordScreen,
  ProjectList,
} from '@screens';
import { pathHome, pathLogIn, pathForgotPassword, pathOAuth, pathProjectList, pathSignUp } from '@routes';

function AppRouter() {
  return (
    <Routes>
      <Route
        path={pathHome}
        element={
          <Layout componentStyle='contents'>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path={pathLogIn}
        element={
          <Layout componentStyle='full'>
            <LoginScreen />
          </Layout>
        }
      />
      <Route
        path={pathSignUp}
        element={
          <Layout componentStyle='full'>
            <SignUpScreen />
          </Layout>
        }
      />
      <Route
        path={pathOAuth}
        element={
          <Layout componentStyle='full'>
            <OauthCallbackScreen />
          </Layout>
        }
      />
      <Route
        path={pathForgotPassword}
        element={
          <Layout componentStyle='full'>
            <ForgotPasswordScreen />
          </Layout>
        }
      />
      <Route
        path={pathProjectList}
        element={
          <Layout componentStyle='full'>
            <ProjectList />
          </Layout>
        }
      />
    </Routes>
  );
}

export { AppRouter };
