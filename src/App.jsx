import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomeLayout, MainPage, Character } from './pages';

import { loader as mainPageLoader } from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: 'character',
        element: <Character />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
