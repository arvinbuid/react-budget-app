// rrd imports
import {useLoaderData} from "react-router-dom";

// helper import functions
import {fetchData} from "../helpers";
import {Intro} from "../components/Intro";
import {toast} from "react-toastify";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return {userName};
}

// action
export async function dashboardAction({request}) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There is a problem creating your account.");
  }
}

export const Dashboard = () => {
  const {userName} = useLoaderData();

  return (
    <div className='w-[80vw] h-screen'>
      <div className='w-[90%] mt-[24px] '>{userName ? <p>{userName}</p> : <Intro />}</div>
    </div>
  );
};
