import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import OurMenu from "../Pages/OurMenu/OurMenu";





const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/our-menu",
                element: <OurMenu></OurMenu>
            }
        ]
    }
])

export default routes