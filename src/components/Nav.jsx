import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <nav className='w-screen h-[4rem] px-[64px] pt-[24px] mb-3 flex items-center'>
      <NavLink to='/'>
        <div className='flex items-center'>
          <div className='mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path d='M6.375 5.5h.875v1.75h-.875a.875.875 0 1 1 0-1.75ZM8.75 10.5V8.75h.875a.875.875 0 0 1 0 1.75H8.75Z' />
              <path
                fillRule='evenodd'
                d='M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.25 3.75a.75.75 0 0 1 1.5 0V4h2.5a.75.75 0 0 1 0 1.5h-2.5v1.75h.875a2.375 2.375 0 1 1 0 4.75H8.75v.25a.75.75 0 0 1-1.5 0V12h-2.5a.75.75 0 0 1 0-1.5h2.5V8.75h-.875a2.375 2.375 0 1 1 0-4.75h.875v-.25Z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <span className='text-2xl font-semibold'>Budget</span>
          <p className='text-2xl text-blue-700 font-bold'>App</p>
        </div>
      </NavLink>
    </nav>
  );
};
