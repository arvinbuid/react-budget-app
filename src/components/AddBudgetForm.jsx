import {CurrencyDollarIcon} from "@heroicons/react/16/solid";
import {useEffect, useRef} from "react";
import {Form, useFetcher} from "react-router-dom";

export const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  // refs
  const formRef = useRef();
  const focusRef = useRef();

  // reset the form if the budget is created or submitted
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className='mt-[36px] flex 2xs:px-2 md:px-0'>
      <div className='w-[560px] rounded-2xl shadow-xl flex items-center justify-center py-2'>
        <div className='w-[96%] h-auto border-dashed border-2 border-black rounded-2xl flex flex-col px-6'>
          <p className='font-bold text-xl mt-[12px]'>Create budget</p>

          <fetcher.Form method='post' ref={formRef} className='flex flex-col gap-4 py-4'>
            {/* Budget Name */}
            <label htmlFor='newBudget'>
              <div className='w-full h-[100px] flex flex-col justify-center'>
                <h2 className='text-lg font-semibold mb-2'>Budget Name</h2>
                <input
                  type='text'
                  name='newBudget'
                  id='newBudget'
                  className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                  placeholder='e.g., Groceries'
                  required
                  ref={focusRef}
                />
              </div>
            </label>

            {/* Amount */}
            <label htmlFor='newBudgetAmount'>
              <div className='w-full h-[100px] flex flex-col justify-center'>
                <h2 className='text-lg font-semibold mb-2'>Amount</h2>
                <input
                  type='number'
                  step='0.01'
                  name='newBudgetAmount'
                  id='newBudgetAmount'
                  className='w-[90%] h-[40px] border-black border-2 rounded-md px-4 focus:outline-none focus:border-blue-600 focus:ring-1'
                  placeholder='e.g., ₱350'
                  required
                  inputMode='decimal'
                />
              </div>
            </label>

            {/* Hidden input to create budget */}
            <input type='hidden' name='_action' value='createBudget' />

            {/* Create budget button */}
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
                    <p>Create budget</p>
                    <CurrencyDollarIcon className='size-4' />
                  </>
                )}
              </button>
            </div>
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
};
