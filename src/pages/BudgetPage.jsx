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
    <div className='w-screen h-auto '>
      <div className='flex flex-col w-[600px] m-auto'>
        <h1 className='text-4xl font-bold text-blue-600 mb-[30px]'>
          {budget.name}
          <span className='text-4xl font-bold text-black'> Overview</span>
        </h1>
        <div className='flex flex-col items-center'>
          <BudgetItem budget={budget} />
          <AddExpenseForm budgets={[budget]} />
        </div>
      </div>

      <div className='flex justify-center '>
        {expenses && expenses.length && (
          <div className='w-[600px]'>
            <h1 className='text-4xl font-bold text-black mb-[30px]'>
              <span className='text-blue-600'>{budget.name} </span>
              Expenses
            </h1>
            <Table expenses={expenses} showBudget={false} />
          </div>
        )}
      </div>
    </div>
  );
};
