// react-router-dom imports
import {useLoaderData} from "react-router-dom";

// helper import functions
import {fetchData} from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return {userName};
}

export const Dashboard = () => {
  const {userName} = useLoaderData();

  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-col justify-center items-center mt-8'>
        <h1 className='text-3xl font-semibold'>Dashboard</h1>
        
      </div>
    </div>
  );
};
