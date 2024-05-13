import {ArrowUturnLeftIcon, HomeIcon} from "@heroicons/react/16/solid";
import {Link, useNavigate, useRouteError} from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <section className='w-screen h-screen'>
      <div className='flex flex-col justify-center gap-4 items-center h-[70vh] '>
        <h1 className='px-4 2xs:text-2xl sm:text-4xl text-center font-semibold text-red-600'>
          Uh oh! There was an error.
        </h1>
        <p className='2xs:text-sm sm:text-lg 2xs:px-4 font-normal '>
          {error.message || error.status}
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 mt-6 2xs:px-4'>
          <button
            className='flex gap-2 bg-black px-6 py-4 text-white'
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowUturnLeftIcon width={20} />
            <p>Go back</p>
          </button>
          <Link to='/'>
            <button className='flex gap-2 bg-black px-6 py-4 text-white'>
              <HomeIcon width={20} />
              <p>Go home</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
