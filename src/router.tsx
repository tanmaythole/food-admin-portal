import AppLayout from "./layout/AppLayout";
import Coupon from "./modules/coupon";
import Customers from "./modules/customers";
import Dashboard from "./modules/dashboard";
import EmployeesShift from "./modules/employeesShift";
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
      {
        path: "/coupons",
        element: <Coupon />,
      },
      {
        path: "/employees",
        element: <EmployeesShift />,
      },
      {
        path: "/*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
];

export default routerConfig;
