import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Dashboard, dashboardLoader} from "./pages/Dashboard";
import {Error} from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
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
