import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes.const.ts';
import { Home } from '@pages/Home';
import { Goosebery } from '@pages/cases/Goosebery';
import { Layout } from '@shared/ui/business_ui/Layout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      },
      {
        path: ROUTES.CASES.GOOSEBERRY,
        element: <Goosebery />
      }
    ]
  }
]);
