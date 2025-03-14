import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import Explore from "~/pages/explore";
import Notifications from "~/pages/notifications";
import Profile from "~/pages/profile";
import MainLayout from "~/layouts/main";
import Messages from "~/pages/messages";
import Bookmarks from "~/pages/bookmarks";
import NotFound from "~/pages/notFound";

 const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'explore',
                element: <Explore/>
            },
            {
                path:'notifications',
                element:<Notifications/>
            },
            {
                path:'messages',
                element:<Messages/>
            },
            {
                path:'bookmarks',
                element:<Bookmarks/>
            },
           
           
            {
                path:':slug',
                element:<Profile/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
    
])
export default routes