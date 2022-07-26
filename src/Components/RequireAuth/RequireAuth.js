import React from 'react';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import auth from '../../FirebaseInit/Firerebase.Init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {

        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;