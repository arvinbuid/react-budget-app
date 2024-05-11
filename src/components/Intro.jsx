import {UserPlusIcon} from "@heroicons/react/16/solid";
import {Form} from "react-router-dom";
import LoginHero from "../assets/login-hero.jpg";

export const Intro = () => {
  return (
    <section className='w-[80vw] h-[80vh] flex justify-between 2xs:flex-col lg:flex-row items-center 2xs:px-4 '>
      <div className='flex flex-col px-8'>
        {/* left side text */}
        <h1 className='2xs:text-4xl sm:text-5xl text-6xl font-bold mb-4 2xs:mb-[30px] text-start lg:text-6xl '>
          Take Control of Your
          <span className='text-blue-800'> Money</span>
        </h1>
        <p>Budgeting is the key to financial stability and happiness.</p>
        <p>Start your Journey today.</p>

        <Form method='post' className='mt-4'>
          <div className='flex flex-col gap-3'>
            <input
              type='text'
              name='userName'
              required
              placeholder='Enter your name...'
              aria-label='Your Name'
              autoComplete='given-name'
              className='border border-slate-800 px-2 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[200px]'
            />

            <button className='text-slate-100 bg-black px-4 py-2 rounded-sm w-[160px] 2xs:mb-10 sm:mb-0'>
              <div className='flex items-center gap-2'>
                <span className='text-sm'>Create Account</span>
                <UserPlusIcon className='size-4' />
              </div>
            </button>
          </div>
        </Form>
      </div>

      {/* Image right side */}
      <img src={LoginHero} className='xs:w-[200px] sm:w-[450px] lg:w-[500px] xl:w-[670px]' />
    </section>
  );
};
