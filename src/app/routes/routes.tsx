import { Route, Routes } from 'react-router-dom';
import { Layout } from '@elements';
import { PAGE_LIST } from './page-list';

function AppRouter() {
  return (
    <Routes>
      {PAGE_LIST.map(({ path, component: Component, componentStyle }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout componentStyle={componentStyle}>
              <Component />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
}

export { AppRouter };
