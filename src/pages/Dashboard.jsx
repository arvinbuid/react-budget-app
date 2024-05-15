// rrd imports
import {Link, useLoaderData} from "react-router-dom";

// helper import functions
import {createBudget, createExpense, delaySubmit, fetchData} from "../helpers";
import {Intro} from "../components/Intro";
import {toast} from "react-toastify";
import {AddBudgetForm} from "../components/AddBudgetForm";
import {AddExpenseForm} from "../components/AddExpenseForm";
import {BudgetItem} from "../components/BudgetItem";
import {Table} from "../components/Table";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return {userName, budgets, expenses};
}

// actions
export async function dashboardAction({request}) {
  await delaySubmit();
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

  // create new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("There is a problem creating your account.");
    }
  }
  // create budget
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created");
    } catch (error) {
      throw new Error("There is a problem creating your Budget.");
    }
  }

  // create expense
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });

      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (error) {
      throw new Error("There is a problem creating your expense.");
    }
  }
}

export const Dashboard = () => {
  const {userName, budgets, expenses} = useLoaderData();

  return (
    <div className='w-screen h-auto px-12'>
      <div className='w-full mt-[24px]'>
        {userName ? (
          <div className='w-full h-[90vh] flex flex-col'>
            <h1 className='text-4xl font-bold'>
              Welcome back, <span className='text-blue-600'>{userName}</span>
            </h1>
            <div>
              {budgets && budgets.length > 0 ? (
                <div className='flex gap-4'>
                  {/* Add budget and add expense */}
                  <div className='w-[50%]'>
                    <AddBudgetForm />
                    <AddExpenseForm budgets={budgets} />
                  </div>
                  {/* Add budget items */}
                  <div className='flex flex-col gap-[36px] w-[60%] px-0 lg:px-4'>
                    <div className='flex flex-col gap-[16px] w-[50%]'>
                      <h2 className='text-4xl font-bold mb-[24px]'>Existing Budgets</h2>
                      {budgets.map((budget) => (
                        <BudgetItem key={budget.id} budget={budget} />
                      ))}
                    </div>
                    {/* Table */}
                    {expenses && expenses.length > 0 && (
                      <div className='w-[50%]'>
                        <h2 className='text-4xl font-bold mb-[50px]'>Recent Expenses</h2>
                        <Table
                          expenses={expenses.sort((a, b) => b.createdAt - a.createdAt).slice(0, 8)}
                        />
                      </div>
                    )}
                    {expenses.length > 8 && (
                      <Link to='expenses'>
                        <button className='bg-slate-900 text-slate-100 flex items-center gap-2 px-4 py-2 rounded-md text-md mb-6'>
                          <p>View all expenses</p>
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className='flex flex-col pt-2'>
                    <p>Budgeting is the key to financial stability and happiness.</p>
                    <p>Create your budget now to get started!</p>
                    <AddBudgetForm />
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <Intro />
        )}
      </div>
    </div>
  );
};
