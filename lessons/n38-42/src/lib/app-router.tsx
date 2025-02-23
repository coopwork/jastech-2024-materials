import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/utils/constants/routes.ts';
import { Suspense } from 'react';
import PageLoader from '@/components/ui/page-loader.tsx';

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES['unregistered'].map(({ path, page }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense
              fallback={<PageLoader />}
              children={page}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
