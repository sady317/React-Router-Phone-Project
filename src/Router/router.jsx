import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/Home";
import PhoneDetails from "../Home/PhoneDetails";
import Contact from "../Components/Contact/Contact";
import Favourite from "../Components/Favourite/Favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
        {path:"/",
            element:<Home/>
        },
        {path:"/favourite",
            element:<Favourite/>
        },
        {path:"phone/:slug",
            element:<PhoneDetails/>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/phone/${params.slug}`)
        },
        {path:"/contact",
            element:<Contact/>
        }
    ]
  },
]);
export default router;