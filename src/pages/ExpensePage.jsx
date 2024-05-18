import {CheckCircleIcon} from "@heroicons/react/16/solid";
import {Link, redirect, useFetcher, useLoaderData} from "react-router-dom";
import {editItem, getAllMatchingItems} from "../helpers";
import {toast} from "react-toastify";

// loader
export async function expenseLoader({params}) {
  const expenses = getAllMatchingItems({
    category: "expenses",
    key: "id",
    value: params.id,
  });

  const expense = expenses.length > 0 ? expenses[0] : null;

  // Throw error message if there is no expense available.
  if (!expense) {
    throw new Error("The expense that you're looking for does not exist.");
  }

  return {expense};
}

// action
export async function expenseAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

  // edit expense
  if (_action === "editExpense") {
    try {
      editItem({
        key: "expenses",
        id: values.expenseId,
        newData: {
          name: values.expenseName,
          amount: parseFloat(values.expenseAmount),
          createdAt: Date.now(),
        },
      });

      toast.success("Expense edited successfully");
    } catch (error) {
      throw new Error("There was a problem editing your expense.");
    }
  }

  return redirect("/");
}

export const ExpensePage = ({}) => {
  const {expense} = useLoaderData();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <div className='w-full px-4'>
      <div className='mt-[36px] flex justify-center 2xs:px-2 md:px-0'>
        <div className='w-[610px] rounded-2xl shadow-xl flex items-center justify-center py-4'>
          <div className='w-[97%] h-auto border-dashed border-2 border-black rounded-2xl flex flex-col px-6'>
            <p className='font-bold text-xl mt-[12px]'>Edit Expense</p>

            <fetcher.Form method='post' className='flex flex-col gap-4 py-4'>
              {/* Expense Name */}
              <label htmlFor='expenseName'>
                <div className='w-full h-[100px] flex flex-col justify-center'>
                  <h2 className='text-lg font-semibold mb-2'>Expense Name</h2>
                  <input
                    type='text'
                    name='expenseName'
                    id='expenseName'
                    className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                    placeholder='e.g., Snacks'
                    defaultValue={expense.name}
                    required
                  />
                </div>
              </label>

              {/* Expense Amount */}
              <label htmlFor='expenseAmount'>
                <div className='w-full h-[100px] flex flex-col justify-center'>
                  <h2 className='text-lg font-semibold mb-2'>Expense Amount</h2>
                  <input
                    type='number'
                    name='expenseAmount'
                    id='expenseAmount'
                    className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                    placeholder='e.g., 100'
                    defaultValue={expense.amount}
                    required
                  />
                </div>
              </label>

              {/* Hidden inputs */}
              <input type='hidden' name='_action' value='editExpense' />
              <input type='hidden' name='expenseId' value={expense.id} />
              <input type='hidden' name='budgetId' value={expense.budgetId} />

              {/* Edit expense button */}
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
                      <p>Edit Expense</p>
                      <CheckCircleIcon className='size-4' />
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
