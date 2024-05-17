// rrd imports
import {useLoaderData} from "react-router-dom";
import {deleteItem, fetchData} from "../helpers";
import {Table} from "../components/Table";
import {toast} from "react-toastify";

// loader
export async function expensesLoader() {
  const expenses = await fetchData("expenses");
  return {expenses};
}

// action
export async function expensesAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

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
}

const ExpensesPage = () => {
  const {expenses} = useLoaderData();

  return (
    <div>
      <h1 className='text-4xl font-bold mb-[16px]'>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div>
          <h2 className='text-lg'>
            Recent Expenses <small className='text-xs'>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <h1>No Expenses to show.</h1>
      )}
    </div>
  );
};

export default ExpensesPage;
