// react-router-dom imports
import {Outlet, useLoaderData} from "react-router-dom";

// helper import functions
import {fetchData} from "../helpers";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return {userName};
}

export const Main = () => {
  const {userName} = useLoaderData();

  return (
    <section className='w-screen h-screen overflow-x-hidden'>
      <main className='flex flex-col justify-center items-center mt-8 px-4'>
        <h1 className='text-3xl font-semibold mb-4'>Main</h1>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum vitae laboriosam
          accusantium numquam adipisci ullam, beatae dicta, rerum aperiam perspiciatis blanditiis
          molestias earum reiciendis libero eum. Iste possimus repellendus incidunt.
        </p>
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
