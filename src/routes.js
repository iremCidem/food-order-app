import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import HomePage from "./pages/homePage";
import Campaigns from "./pages/campaigns";
import Restaurants from "./pages/restaurants";
import Cart from "./pages/cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/campaigns",
    element: <Campaigns />,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
export { router };
