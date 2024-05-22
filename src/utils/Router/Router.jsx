import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../../views/App/App";
import Home from "../../views/Home/Home";
import Shop from "../../views/Shop/Shop";
import Cart from "../../views/Cart/Cart";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: 'error',
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'cart',
          element: <Cart />
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
