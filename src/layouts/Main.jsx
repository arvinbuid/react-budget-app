// react-router-dom imports
import {Outlet, useLoaderData} from "react-router-dom";

// helper import functions
import {fetchData} from "../helpers";
import {Nav} from "../components/Nav";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Footer} from "../components/Footer";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return {userName};
}

export const Main = () => {
  const {userName} = useLoaderData();

  return (
    <main>
      <Nav userName={userName} />
      <ToastContainer />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};
