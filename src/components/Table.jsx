import {ExpenseItem} from "./ExpenseItem";

export const Table = ({expenses, showBudget = true}) => {
  return (
    <section className='overflow-x-auto sm:overflow-x-visible'>
      <table className='w-full min-w-full divide-y divide-gray-200 bg-white shadow-md sm:rounded-lg'>
        <thead className='text-md'>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : ""].map((i, index) => (
              <th
                key={index}
                className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {expenses.map((expense) => (
            <tr key={expense.id} className='text-sm'>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
