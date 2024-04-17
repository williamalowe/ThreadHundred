import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import App from "../../views/App/App";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>error</>
    }
  ])
  return <RouterProvider router={Router} />
}

export default Router
