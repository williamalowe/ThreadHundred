import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../../views/App/App";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: 'error',
      children: [
        {
          path: '/',
          element: 'home page'
        },
        {
          path: 'shop',
          element: 'shop page'
        },
        {
          path: 'cart',
          element: 'cart page'
        },
        {
          path: 'contact',
          element: 'contact page'
        },
      ]
    }
  ])
  return <RouterProvider router={Router} />
}

export default Router
