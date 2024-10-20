import { RouterProvider } from 'react-router-dom';
import { routes } from '@core/router';

export const App = () => {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
};
