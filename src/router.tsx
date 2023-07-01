import AppLayout from "./layout/AppLayout";
import Customers from "./modules/customers";
import Dashboard from "./modules/dashboard";

const routerConfig = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
];

export default routerConfig;
