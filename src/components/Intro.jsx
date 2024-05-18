import {UserPlusIcon} from "@heroicons/react/16/solid";
import {Form} from "react-router-dom";
import LoginHero from "../assets/login-hero.jpg";

export const Intro = () => {
  return (
    <section className='w-full h-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8'>
      {/* left side - text content */}
      <div className='w-full lg:w-1/2 flex flex-col lg:items-start justify-center lg:pr-8'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left'>
          Take Control of Your <span className='text-blue-800'>Money</span>
        </h1>
        <p className='text-center lg:text-left'>
          Budgeting is the key to financial stability and happiness.
        </p>
        <p className='text-center lg:text-left'>Start your journey today.</p>

        {/* Form for creating new user */}
        <Form method='post' className='mt-4 w-full max-w-xs lg:max-w-none lg:w-auto'>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <input
              type='text'
              name='userName'
              required
              placeholder='Enter your name...'
              aria-label='Your Name'
              autoComplete='given-name'
              className='border border-slate-800 px-2 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full'
            />

            {/* Hidden input */}
            <input type='hidden' name='_action' value='newUser' />

            {/* Create Account Button */}
            <button className='text-slate-100 bg-black px-4 py-2 rounded-sm w-full max-w-xs lg:max-w-[160px]'>
              <div className='flex items-center justify-center lg:justify-start gap-2'>
                <span className='text-sm'>Create Account</span>
                <UserPlusIcon className='w-4 h-4' />
              </div>
            </button>
          </div>
        </Form>
      </div>

      {/* Right Side: Image */}
      <img src={LoginHero} alt='Login Hero' className='w-full lg:w-1/2 h-auto mt-8 lg:mt-0' />
    </section>
  );
};
