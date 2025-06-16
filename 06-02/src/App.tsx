import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import List from "./screens/list";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list",
      element: <List />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
