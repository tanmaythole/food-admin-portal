import AppLayout from "./layout/AppLayout";
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
    ],
  },
];

export default routerConfig;
