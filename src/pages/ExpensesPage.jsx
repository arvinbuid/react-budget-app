// rrd imports
import {useLoaderData} from "react-router-dom";
import {fetchData} from "../helpers";
import {Table} from "../components/Table";

// loader
export function expensesLoader() {
  const expenses = fetchData("expenses");
  return {expenses};
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
