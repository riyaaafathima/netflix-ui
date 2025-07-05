import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import WatchlistPage from "./WatchListPage";



const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:'/watchlist',
      element:<WatchlistPage/>,
    }
  ]);

 
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
