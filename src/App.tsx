import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "/my-vehicles",
      //   element: <MyVehicles />,
      // },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
