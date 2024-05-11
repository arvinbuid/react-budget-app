// react-router-dom imports
import {Outlet, useLoaderData} from "react-router-dom";

// helper import functions
import {fetchData} from "../helpers";
import {Nav} from "../components/Nav";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return {userName};
}

export const Main = () => {
  const {userName} = useLoaderData();

  return (
    <section className='w-screen h-screen overflow-x-hidden'>
      <main className='flex flex-col justify-center items-center px-4'>
        <Nav userName={userName} />
        <Outlet />
      </main>
      <footer className='w-screen h-[28px] bg-slate-950 py-8'>
        <div className='flex flex-col items-center'>
          <h1 className='text-slate-100 font-normal'>2024 Budget App. All Right Reserved.</h1>
        </div>
      </footer>
    </section>
  );
};
