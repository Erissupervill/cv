
import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider.jsx';

export default function UserLayout() {

    //where the template of user UI go through
    const { user, token } = useStateContext()
    if (!token) {
         return <Navigate to="/login"></Navigate>
    }
   
    return (
        <>
            <Outlet />
        </>
    )
}