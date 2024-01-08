import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../AuthProvider/AuthProvider";
import Preloading from "../Preloading/Preloading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);


    if(loading){
        return <Preloading></Preloading>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to={'/login'}>
            
        </Navigate>
    );
};

export default PrivateRoute;