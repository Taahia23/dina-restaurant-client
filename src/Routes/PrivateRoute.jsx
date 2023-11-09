import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(user?.email){
        return children
    }

    if(loading) {
        return <div className="max-w-6xl mx-auto "><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user) {
         return children
    }



    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;