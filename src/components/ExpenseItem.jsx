import {formatCurrency, formatDate} from "../helpers";

export const ExpenseItem = ({expense}) => {
  return (
    <>
      <td className='px-4 py-4 w-full text-center'>{expense.name}</td>
      <td className='px-4 '>{formatCurrency(expense.amount)}</td>
      <td className='px-4'>{formatDate(expense.createdAt)}</td>
      <td className='px-4'>{formatDate(expense.createdAt)}</td>
    </>
  );
};
