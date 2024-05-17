// rrd imports
import {Form, NavLink} from "react-router-dom";

// heroicons imports
import {CurrencyDollarIcon, TrashIcon} from "@heroicons/react/16/solid";

export const Nav = ({userName}) => {
  return (
    <nav className='w-screen h-[4rem] px-[64px] pt-[24px] 2xs:mb-10 flex items-center '>
      <div className='flex items-center w-[100%] justify-between'>
        <NavLink to='/'>
          <div className='flex items-center'>
            <div>
              <CurrencyDollarIcon className='size-10 lg:size-6 text-blue-500 mr-1' />
            </div>

            <span className='text-2xl font-semibold hidden lg:block'>Budget</span>
            <p className='text-2xl text-blue-700 font-bold hidden lg:block'>App</p>
          </div>
        </NavLink>

        {userName && (
          <Form
            method='post'
            action='/logout'
            onSubmit={(event) => {
              if (!confirm("Delete user and all its data?")) {
                event.preventDefault();
              }
            }}
          >
            <button className='text-slate-100 bg-red-600 px-4 py-3 hover:bg-red-700 rounded-sm'>
              <div className='flex items-center gap-1'>
                <span className='text-sm'>Delete user</span>
                <TrashIcon className='size-4' />
              </div>
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};
