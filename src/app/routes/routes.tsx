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
  SignUpSuccessScreen,
  ColleaguesScreen,
} from '@screens';
import {
  PATH_HOME,
  PATH_LOGIN,
  PATH_FORGOT_PASSWORD,
  PATH_OAUTH,
  PATH_SIGNUP,
  PATH_PROJECTS_ADD,
  PATH_PROJECTS,
  PATH_PROJECTS_MANAGE,
  PATH_COLLEAGUES,
  PATH_SIGNUP_SUCCESS,
} from '@routes';
import { Header } from '@components';
import { Outlet } from 'react-router';

function BasicLayout() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        {/* 홈화면 */}
        <Route
          path={PATH_HOME}
          element={
            <Layout componentStyle='contents'>
              <HomeScreen />
            </Layout>
          }
        />

        {/* 프로젝트 찾기 */}
        <Route
          path={PATH_PROJECTS}
          element={
            <Layout componentStyle='contents'>
              <ProjectsScreen />
            </Layout>
          }
        />

        {/* TODO: 동료 찾기 */}
        <Route
          path={PATH_COLLEAGUES}
          element={
            <Layout componentStyle='contents'>
              <ColleaguesScreen />
            </Layout>
          }
        />

        {/* TODO: 프로젝트 관리 */}
        <Route
          path={PATH_PROJECTS_MANAGE}
          element={
            <Layout componentStyle='contents'>
              <div>프로젝트 관리</div>
            </Layout>
          }
        />

        {/* 프로젝트 등록 */}
        <Route
          path={PATH_PROJECTS_ADD}
          element={
            <Layout componentStyle='contents'>
              <ProjectAddScreen />
            </Layout>
          }
        />
      </Route>

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
        path={PATH_SIGNUP_SUCCESS}
        element={
          <Layout componentStyle='full'>
            <SignUpSuccessScreen />
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
        path={PATH_FORGOT_PASSWORD}
        element={
          <Layout componentStyle='full'>
            <ForgotPasswordScreen />
          </Layout>
        }
      />
    </Routes>
  );
}

export { AppRouter };
