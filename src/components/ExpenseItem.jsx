import {Link} from "react-router-dom";
import {formatCurrency, formatDate, getAllMatchingItems} from "../helpers";

export const ExpenseItem = ({expense}) => {
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td className='px-4 py-4 w-full text-center'>{expense.name}</td>
      <td className='px-4 '>{formatCurrency(expense.amount)}</td>
      <td className='px-4'>{formatDate(expense.createdAt)}</td>
      <td>
        <Link to={`/budget/${budget.id}`} ><span>{budget.name}</span></Link>
      </td>
    </>
  );
};
