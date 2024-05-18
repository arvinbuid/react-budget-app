import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Dashboard, dashboardAction, dashboardLoader} from "./pages/Dashboard";
import {Error} from "./pages/Error";
import {Main, mainLoader} from "./layouts/Main";
import {logoutAction} from "./actions/logout";
import {Footer} from "./components/Footer";
import ExpensesPage, {expensesAction, expensesLoader} from "./pages/ExpensesPage";
import {BudgetPage, budgetAction, budgetLoader} from "./pages/BudgetPage";
import {deleteBudget} from "./actions/deleteBudget";
import {ExpensePage, expenseAction, expenseLoader} from "./pages/ExpensePage";

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
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "expense/:id",
        element: <ExpensePage />,
        loader: expenseLoader,
        action: expenseAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      // {
      //   element: <Footer />,
      // },
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
