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
      <td className='px-4 py-4 w-full text-center'>{expense.name}</td>
      <td className='px-4 '>{formatCurrency(expense.amount)}</td>
      <td className='px-4'>{formatDate(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link to={`/budget/${budget.id}`}>
            <span>{budget.name}</span>
          </Link>
        </td>
      )}

      <td>
        {/* delete expense */}
        <fetcher.Form method='post'>
          <input type='hidden' name='_action' value='deleteExpense' />
          <input type='hidden' name='expenseId' value={expense.id} />
          <button
            type='submit'
            className='bg-red-500 px-4 py-2 text-slate-100 rounded-sm'
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={16} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};
