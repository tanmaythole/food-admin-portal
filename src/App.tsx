import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routerConfig from "./router";

const router = createBrowserRouter(routerConfig);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
