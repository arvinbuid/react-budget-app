import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Dashboard, dashboardAction, dashboardLoader} from "./pages/Dashboard";
import {Error} from "./pages/Error";
import {Main, mainLoader} from "./layouts/Main";
import {logoutAction} from "./actions/logout";
import {Footer} from "./components/Footer";

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
      { 
        element: <Footer />,
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
