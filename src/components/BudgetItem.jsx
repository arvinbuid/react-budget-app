import {Form, Link} from "react-router-dom";
import {calculateSpentByBudget, formatCurrency, formatPercentage} from "../helpers";
import {BanknotesIcon, TrashIcon} from "@heroicons/react/16/solid";

export const BudgetItem = ({budget, showDelete}) => {
  const {id, name, amount} = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className='flex w-full sm:w-[610px] px-4 sm:px-0 mb-2'>
      <div className='flex flex-col gap-12 border-4 rounded-lg  border-blue-500 px-6 py-4 w-[600px] h-[240px] lg:h-[220px]'>
        <div className='flex justify-between text-md font-bold'>
          <p className='text-lg lg:text-3xl font-bold'>{name}</p>
          <p>
            {formatCurrency(amount)} <br />
            <span className='font-normal text-sm'>Budgeted</span>
          </p>
        </div>
        <div className='flex flex-col '>
          <progress max={amount} value={spent} className='w-full rounded-full custom-progress'>
            {formatPercentage(spent / amount)}
          </progress>
          <div className='flex justify-between mb-3'>
            <small>{formatCurrency(spent)} spent</small>
            <small>{formatCurrency(amount - spent)} remaining</small>
          </div>

          {/* Show a delete button inside individual budget page or show view details when inside dashboard */}
          {showDelete ? (
            <Form
              method='post'
              action='delete'
              onSubmit={(event) => {
                if (!confirm("Are you sure you want to permanently delete this budget?")) {
                  event.preventDefault();
                }
              }}
            >
              <div className='w-full flex justify-center'>
                <button
                  type='submit'
                  className='f
              flex gap-2 px-4 py-2 bg-red-600 text-white items-center hover:bg-red-700 rounded-md'
                >
                  <span>Delete Budget</span>
                  <TrashIcon width={20} />
                </button>
              </div>
            </Form>
          ) : (
            <Link to={`/budget/${id}`}>
              <div className='w-full flex justify-center '>
                <button className='flex items-center gap-2 text-slate-100 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md'>
                  <span>View Details</span>
                  <BanknotesIcon width={20} />
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
