import {Link, useFetcher} from "react-router-dom";
import {formatCurrency, formatDate, getAllMatchingItems} from "../helpers";
import {TrashIcon} from "@heroicons/react/16/solid";

export const ExpenseItem = ({expense, showBudget}) => {
  // fetcher
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td className='px-6 py-4 text-center'>{expense.name}</td>
      <td className='px-6 py-4 text-center'>{formatCurrency(expense.amount)}</td>
      <td className='px-6 py-4 text-center'>{formatDate(expense.createdAt)}</td>
      {showBudget && (
        <td className='px-6 py-4 text-center'>
          <Link
            to={`/budget/${budget.id}`}
            className='inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'
          >
            <span>{budget.name}</span>
          </Link>
        </td>
      )}
      <td className='px-6 py-4 text-center'>
        <fetcher.Form method='post'>
          <input type='hidden' name='_action' value='deleteExpense' />
          <input type='hidden' name='expenseId' value={expense.id} />
          <button
            type='submit'
            className='bg-red-500 px-4 py-2 text-slate-100 rounded-sm hover:bg-red-600'
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={16} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};
