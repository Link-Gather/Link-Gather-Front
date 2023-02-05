import { ROUTE_PATHS } from './const';
import { HomeScreen, LoginScreen, SignUpScreen, OauthCallbackScreen } from '@screens';

export type ComponentStyle = 'full' | 'contents';
interface PageList {
  path: string;
  component: React.FC;
  componentStyle: ComponentStyle;
}

export const PAGE_LIST: PageList[] = [
  {
    path: ROUTE_PATHS.home,
    component: HomeScreen,
    componentStyle: 'contents',
  },
  {
    path: ROUTE_PATHS.logIn,
    component: LoginScreen,
    componentStyle: 'full',
  },
  {
    path: ROUTE_PATHS.signUp,
    component: SignUpScreen,
    componentStyle: 'full',
  },
  {
    path: ROUTE_PATHS.oauth,
    component: OauthCallbackScreen,
    componentStyle: 'full',
  },
];
