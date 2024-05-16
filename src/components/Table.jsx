import {ExpenseItem} from "./ExpenseItem";

export const Table = ({expenses}) => {
  return (
    <section>
      <table>
        <thead className='text-md'>
          <tr>
            {["Name", "Amount", "Date", "Budget", "test"].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className='text-sm'>
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
