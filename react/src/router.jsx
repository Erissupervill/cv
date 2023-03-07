import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./components/DefaultLayout.jsx";
import LogLayout from "./components/GuestLayout.jsx";
import Login from './views/Login.jsx';
import NotFound from './views/NotFound.jsx';
import Signup from "./views/Signup.jsx";
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children:[
            {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }
        ]
    },
    {
        path: '/',
        element: <LogLayout/>,
        children: [
                {
                    path: '/signup',
                    element: <Signup></Signup>
                }, {
                    path: '/login',
                    element: <Login></Login>
                },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;