import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <nav className='w-screen h-[4rem] px-[64px] pt-[24px] mb-3 flex items-center'>
      <NavLink to='/'>
        <div className='flex items-center'>
          <div>
            
          </div>

          <span className='text-2xl font-semibold'>Budget</span>
          <p className='text-2xl text-blue-700 font-bold'>App</p>
        </div>
      </NavLink>
    </nav>
  );
};
