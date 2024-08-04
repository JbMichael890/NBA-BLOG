import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import News from "../pages/News";
import Entertainment from "../pages/Entertainment";
import History from "../pages/History";
import Community from "../pages/Community";
import Details from "../component/Details";
import BlogPageImageTwo from "../pages/BlogPageImageTwo";
import BlogPageImage from "../pages/BlogPageImage";
import Postblog from "../pages/Postblog";

export const mainRoute = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/blogone",
        element: <BlogPageImage />,
      },
      {
        path: "/blogtwo",
        element: <BlogPageImageTwo />,
      },
      {
        path: "/postblog",
        element: <Postblog />,
      },
    ],
  },
]);
