import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/utils/constants/routes.ts';

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES['unregistered'].map(({ path, page }) => (
        <Route
          key={path}
          path={path}
          element={page}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
