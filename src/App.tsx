import { RouterProvider } from 'react-router-dom';
import { routes } from '@core/router';
import { Tabs } from '@shared/ui/business_ui/Tabs';

export const App = () => {
  return (
    <main>
      <RouterProvider router={routes} />
      <Tabs />
    </main>
  );
};
