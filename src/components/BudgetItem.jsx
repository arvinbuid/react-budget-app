import {calculateSpentByBudget, formatCurrency, formatPercentage} from "../helpers";

export const BudgetItem = ({budget}) => {
  const {id, name, amount} = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <section>
      <div className='flex flex-col gap-12 border-4 rounded-lg border-blue-500 w-[540px] h-[200px] px-6 py-4'>
        <div className='flex justify-between text-md font-bold'>
          <p>{name}</p>
          <p>
            {formatCurrency(amount)} <br />
            <span className='font-normal text-sm'>Budgeted</span>
          </p>
        </div>
        <div className='flex flex-col '>
          <progress
            max={amount}
            value={spent}
            className='w-full rounded-full custom-progress'
            
          >
            {formatPercentage(spent / amount)}
          </progress>
          <div className='flex justify-between'>
            <small>{formatCurrency(spent)} spent</small>
            <small>{formatCurrency(amount - spent)} remaining</small>
          </div>
        </div>
      </div>
    </section>
  );
};
