import { createBrowserRouter, RouterProvider } from "react-router-dom";
//      FN .                    Component
import HomePage from "../page/HomePage";
import LoginPage from "../page/loginPage";
import ProfilePage from "../page/ProfilePage";
import NotFoundPage from "../page/NotFound";


const router = createBrowserRouter([
  { path: "/", element: <h1><HomePage /></h1> },
  { path: "/login", element: <h1><LoginPage /></h1> },
  { path: "/profile", element: <h1><ProfilePage /></h1> },
  {path:'*' , element:<h1><NotFoundPage /></h1>},
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
