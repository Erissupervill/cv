
import {Outlet, Navigate} from "react-router-dom";

import { useStateContext } from '../contexts/ContextProvider.jsx';
export default function LogLayout(){

    //where the template for login and sign up go through
    const { user, token } = useStateContext()
    if (token) {
        return <Navigate to="/dashboard"></Navigate>
    }
    return(
        <>
        <Outlet />
        </>
    )
}