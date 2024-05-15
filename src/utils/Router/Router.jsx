import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../../views/App/App";
import Shop from "../../views/Shop/Shop";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <>error</>,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={Router} />;
};

export default Router;
