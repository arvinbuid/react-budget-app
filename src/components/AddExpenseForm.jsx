import {PlusCircleIcon} from "@heroicons/react/16/solid";
import {useEffect, useRef} from "react";
import {useFetcher} from "react-router-dom";

export const AddExpenseForm = ({budgets}) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  // refs
  const formRef = useRef();
  const focusRef = useRef();

  // reset the form if the expense is submitted or created
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className='w-full sm:w-[610px] px-0'>
      <div className='mt-[40px] flex 2xs:px-2 md:px-0 mb-12 '>
        <div className='w-full px-2 rounded-2xl shadow-xl flex items-center justify-center py-4'>
          <div className='w-full h-auto border-dashed border-2 border-black rounded-2xl flex flex-col px-6'>
            <h2 className='font-bold text-xl mt-[12px]'>
              Add New{" "}
              <span className='text-blue-700 font-bold'>
                {budgets.length === 1 && `${budgets.map((budget) => budget.name)}`}
              </span>{" "}
              Expense
            </h2>

            <fetcher.Form method='post' ref={formRef} className='flex flex-col gap-4 py-4'>
              {/* Expense Name */}
              <label htmlFor='newExpense'>
                <div className='w-full h-[100px] flex flex-col justify-center'>
                  <h2 className='text-lg font-semibold mb-2'>Expense Name</h2>
                  <input
                    type='text'
                    name='newExpense'
                    id='newExpense'
                    className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                    placeholder='e.g., Coffee'
                    required
                    ref={focusRef}
                  />
                </div>
              </label>

              {/* Amount */}
              <label htmlFor='newExpenseAmount'>
                <div className='w-full h-[100px] flex flex-col justify-center '>
                  <h2 className='text-lg font-semibold mb-2'>Amount</h2>
                  <input
                    type='number'
                    step='0.01'
                    inputMode='decimal'
                    name='newExpenseAmount'
                    id='newExpenseAmount'
                    className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                    placeholder='e.g., ₱3.50'
                    required
                  />
                </div>
              </label>

              {/* Category */}
              <label htmlFor='newExpenseBudget' hidden={budgets.length === 1}>
                <div className='w-full h-[100px] flex flex-col justify-center'>
                  <h2 className='text-lg font-semibold mb-2'>Budget Category</h2>
                  <select
                    id='newExpenseBudget'
                    name='newExpenseBudget'
                    required
                    className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                  >
                    {budgets
                      .sort((a, b) => a.createdAt - b.createdAt)
                      .map((budget) => (
                        <option key={budget.id} value={budget.id}>
                          {budget.name}
                        </option>
                      ))}
                  </select>
                </div>
              </label>

              {/* Hidden input to create expense*/}
              <input type='hidden' name='_action' value='createExpense' />

              {/* Create expense button */}
              <div className='max-w-[200px] mb-2'>
                <button
                  type='submit'
                  className='bg-slate-900 text-slate-100 flex items-center gap-2 px-4 py-2 rounded-md text-md'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <p>Submitting...</p>
                  ) : (
                    <>
                      <p>Create Expense</p>
                      <PlusCircleIcon className='size-4' />
                    </>
                  )}
                </button>
              </div>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
};
