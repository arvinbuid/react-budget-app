// rrd imports
import {useLoaderData} from "react-router-dom";

// helper import functions
import {createBudget, fetchData} from "../helpers";
import {Intro} from "../components/Intro";
import {toast} from "react-toastify";
import {AddBudgetForm} from "../components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return {userName, budgets};
}

// actions
export async function dashboardAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

  // create new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("There is a problem creating your account.");
    }
  }
  // create budget
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created");
    } catch (error) {
      throw new Error("There is a problem creating your Budget.");
    }
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
