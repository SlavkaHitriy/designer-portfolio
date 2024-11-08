import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes.const.ts';
import { Home } from '@pages/Home';
import { Goosebery } from '@pages/cases/Goosebery';
import { Layout } from '@shared/ui/business_ui/Layout';
import { SwiftFlow } from '@pages/cases/SwiftFlow';
import { About } from '@pages/About';

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
        path: ROUTES.ABOUT,
        element: <About />
      },
      {
        path: ROUTES.CASES.GOOSEBERRY,
        element: <Goosebery />
      },
      {
        path: ROUTES.CASES.SWIFTFLOW,
        element: <SwiftFlow />
      }
    ]
  }
]);
