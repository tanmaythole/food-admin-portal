import AppLayout from "./layout/AppLayout";
import Customers from "./modules/customers";
import Dashboard from "./modules/dashboard";
import OredrsAnalytics from "./modules/ordersAnalytics";

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
        path: "/orders",
        element: <OredrsAnalytics />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
];

export default routerConfig;
