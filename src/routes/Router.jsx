import { createBrowserRouter, RouterProvider} from "react-router-dom";
//      FN .                    Component
import HomePage from "../page/HomePage";
import LoginPage from "../page/loginPage";
import ProfilePage from "../page/ProfilePage";
import NotFoundPage from "../page/NotFound";
import AppLayout from "../layout/AppLayout";


const router = createBrowserRouter([
  
  { path: "/login", element: <h1><LoginPage /></h1> },
  { path: "/profile", element: <h1><ProfilePage /></h1> },
  {
    path: '/', element:<AppLayout />,
    children: [
      { path: "/", element: <h1><HomePage /></h1> },
      { path: "/profile", element: <h1><ProfilePage /></h1> },
    ]
  },
  {path:'*' , element:<h1><NotFoundPage /></h1>},
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
