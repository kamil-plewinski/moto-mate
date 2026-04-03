import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AddVehiclePage from "./pages/AddVehiclePage";
import MyVehiclesPage from "./pages/MyVehiclesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "add-vehicle",
        element: <AddVehiclePage />,
      },
      {
        path: "my-vehicles",
        element: <MyVehiclesPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
