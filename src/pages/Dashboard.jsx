// rrd imports
import {useLoaderData} from "react-router-dom";

// helper import functions
import {fetchData} from "../helpers";
import {Intro} from "../components/Intro";
import {toast} from "react-toastify";
import {AddBudgetForm} from "../components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return {userName, budgets};
}

// action
export async function dashboardAction({request}) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  try {
    // throw new Error("Its joever");
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There is a problem creating your account.");
  }
}

export const Dashboard = () => {
  const {userName, budgets} = useLoaderData();

  return (
    <div className='w-[80vw] h-screen '>
      <div className='w-[90%] mt-[24px]'>
        {userName ? (
          <div className='w-full h-[90vh] flex flex-col'>
            <h1 className='text-4xl font-bold'>
              Welcome back, <span className='text-blue-600'>{userName}</span>
            </h1>
            <div className='grid grid-cols-1'>
              {/* {budgets ? () : ()} */}
              <div>
                <div>
                  <AddBudgetForm />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Intro />
        )}
      </div>
    </div>
  );
};
