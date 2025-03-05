import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import {Header} from "./components/Header"
import HandleEmail from "./components/HandleEmail";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
//importing lazy loading///////////////
const About=lazy(()=>import("./components/About"));
const AppLayout=()=>{
    return( <div className="app">
        <Header />
        <Outlet />
    </div>
    );
};
/**using child and outlet(component)==>This is a placeholder where the child components (like Home, About, Contact) will be rendered 
 when the corresponding route is matched.before using child and outlet if we try to render the header will gone only actual part shown to resolve
 using outlet and child making the header component constant and only rendering the corresponding route.
  */

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
            path:"/",
            element:< Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>lazyyy Loadinggg</h1>}>< About /> </Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurant/menu/:resId",
                element:< RestaurantMenu />
            }
            
        ],
        errorElement:<Error/>

    },
   
]);
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);

