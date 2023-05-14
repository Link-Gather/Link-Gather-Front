import { Route, Routes } from 'react-router-dom';
import { Layout } from '@elements';
import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  OauthCallbackScreen,
  ForgotPasswordScreen,
  ProjectAddScreen,
  ProjectsScreen,
} from '@screens';
import {
  PATH_HOME,
  PATH_LOGIN,
  PATH_FORGOT_PASSWORD,
  PATH_OAUTH,
  PATH_SIGNUP,
  PATH_PROJECT_ADD,
  PATH_PROJECT,
  PATH_PROJECTS,
} from '@routes';

function AppRouter() {
  return (
    <Routes>
      <Route
        path={PATH_HOME}
        element={
          <Layout componentStyle='contents'>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path={PATH_LOGIN}
        element={
          <Layout componentStyle='full'>
            <LoginScreen />
          </Layout>
        }
      />
      <Route
        path={PATH_SIGNUP}
        element={
          <Layout componentStyle='full'>
            <SignUpScreen />
          </Layout>
        }
      />
      <Route
        path={PATH_OAUTH}
        element={
          <Layout componentStyle='full'>
            <OauthCallbackScreen />
          </Layout>
        }
      />
      <Route
        path={PATH_PROJECT}
        element={
          <Layout componentStyle='contents'>
            <ProjectsScreen />
          </Layout>
        }
      />
      <Route
        path={PATH_PROJECT_ADD}
        element={
          <Layout componentStyle='contents'>
            <ProjectAddScreen />
          </Layout>
        }
      />
    </Routes>
  );
}

export { AppRouter };
