import { createBrowserRouter, RouterProvider } from "react-router-dom";
//      FN .                    Component

const router = createBrowserRouter([
  { path: "/", element: <h1>Home</h1> },
  { path: "/login", element: <h1>Login</h1> },
  { path: "/profile", element: <h1>Profile</h1> },
  {path:'*' , element:<h1>404 Not found</h1>},
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
