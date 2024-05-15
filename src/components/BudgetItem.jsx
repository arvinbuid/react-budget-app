export const BudgetItem = ({budget}) => {
  const {id, name, amount} = budget;

  return (
    <section>
      <div className='flex flex-col gap-4 border-4 rounded-lg border-blue-500 w-[300px] h-auto px-4 py-4'>
        <div className='flex justify-between text-md font-bold'>
          <p>{name}</p>
          <p>
            {amount} <br />
            <span className="font-normal text-sm">Budgeted</span>
          </p>
        </div>
        <div className='flex flex-col '>
          <progress max={amount} value={100} className='w-full'>
            {/* percentage */}
          </progress>
          <div className='flex justify-between'>
            <small>...spent</small>
            <small>...remaining</small>
          </div>
        </div>
      </div>
    </section>
  );
};
