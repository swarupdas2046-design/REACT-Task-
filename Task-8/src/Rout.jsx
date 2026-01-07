import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import App from "./App";

import Store from "./Pages/Store";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Mens from "./Pages/Mens";
import Women from "./Pages/women";

let Rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "store",
        element: <Store />,
        children: [
          {
            path: "men",
            element: <Mens />,
          },
          {
            path: "women",
            element: <Women />,
          },
        ],
      },
    ],
  },
]);
export default Rout;
