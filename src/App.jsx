import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Dashboard, dashboardLoader} from "./pages/Dashboard";
import {Error} from "./pages/Error";
import {Main, mainLoader} from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
