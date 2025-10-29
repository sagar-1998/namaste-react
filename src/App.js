import { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantContainer from "./components/RestaurantContainer";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Login from "./components/Login";
import Shimmer from "./utils/Shimmer";
import UserContext from "./Context/UserContext";

// how to change the context value

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const data = useContext(UserContext);
  const [userName, setUserName] = useState(data.userName);
  // const [userName1, setUserName1] = useState(data.userName);
  return (
    // It is necessary to pass value provider
    <UserContext.Provider value={{ userName: userName, setUserName }}>
      <div className="app-container">
        {/* <UserContext.Provider
          value={{ userName: userName1, setUserName: setUserName1 }}
        > */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<Shimmer numberOfCards={4} />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
