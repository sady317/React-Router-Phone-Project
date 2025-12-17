import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/Home";
import PhoneDetails from "../Home/PhoneDetails";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
        {path:"/",
            element:<Home/>
        },
        {path:"/details:slug",
            element:<PhoneDetails/>
        },
        {path:"/contact",
            element:<Contact/>
        }
    ]
  },
]);
export default router;