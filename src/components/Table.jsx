import {ExpenseItem} from "./ExpenseItem";

export const Table = ({expenses, showBudget = true}) => {
  return (
    <section>
      <table>
        <thead className='text-md'>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : ""].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
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
