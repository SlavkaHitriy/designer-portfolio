import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes.const.ts';
import { Home } from '@pages/Home';

export const routes = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
  }
]);
