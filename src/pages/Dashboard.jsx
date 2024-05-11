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
    <div className='w-[80vw] h-screen'>
      <div className='w-[90%] mt-[24px] '>
        <h1 className='text-3xl font-semibold'>
          Welcome&nbsp;
          <span className='text-blue-700'>
            {userName}
          </span>
        </h1>
      </div>
    </div>
  );
};
