import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const RoutePrivate = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {

        return (
        //    loading
        )

    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (children)
                    : (<Redirect to={{
                        pathname: "/Login",
                        state: { from: location }
                    }}>
                    </Redirect>)}
        >
        </Route>
    );
};

export default RoutePrivate;