import PropTypes from "prop-types"
import useAuth from "../hock/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {users, loading} = useAuth()
    const location = useLocation()
    


    if(users){
        return children
    }
    if(loading){

       return <span className="loading loading-spinner loading-lg"></span>
    
    }
    return <Navigate to={'/login'} state={location.pathname} />
    
};

PrivateRoute.propTypes = {
  children: PropTypes.any
}

export default PrivateRoute;