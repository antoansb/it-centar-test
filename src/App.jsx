import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomeLayout, MainPage, Character } from './pages';

import { loader as characterLoader } from './pages/Character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'character/:id',
        element: <Character />,
        loader: characterLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
