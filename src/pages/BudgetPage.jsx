import {useLoaderData} from "react-router-dom";
import {createExpense, deleteItem, getAllMatchingItems} from "../helpers";
import {BudgetItem} from "../components/BudgetItem";
import {AddExpenseForm} from "../components/AddExpenseForm";
import {Table} from "../components/Table";
import {toast} from "react-toastify";

// loader
export async function budgetLoader({params}) {
  // budget
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  // expenses
  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  // display error message if no budget exists
  if (!budget) {
    throw new Error("The budget the you're looking for does not exists.");
  }

  return {budget, expenses};
}

// action
export async function budgetAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

  // delete expense
  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });

      return toast.success(`Expense deleted`);
    } catch (error) {
      throw new Error("There was a problem deleting your expense.");
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

export const BudgetPage = () => {
  const {budget, expenses} = useLoaderData();

  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col w-full max-w-4xl rounded-lg p-4 sm:p-6 lg:p-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-blue-600 mb-6'>
          {budget.name}
          <span className='text-3xl sm:text-4xl font-bold text-black'> Overview</span>
        </h1>
        <div className='flex flex-col items-center'>
          <BudgetItem budget={budget} showDelete={true} />
          <AddExpenseForm budgets={[budget]} />
        </div>
        <div className='flex justify-center mt-6'>
          {expenses && expenses.length && (
            <div className='w-full'>
              <h1 className='text-3xl sm:text-4xl font-bold text-black mb-6'>
                <span className='text-blue-600'>{budget.name} </span>
                Expenses
              </h1>
              <div className='overflow-x-auto'>
                <Table expenses={expenses} showBudget={false} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
