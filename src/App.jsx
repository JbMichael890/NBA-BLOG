import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./routes/Router";

const App = () => {
  return <RouterProvider router={mainRoute} />;
};

export default App;
