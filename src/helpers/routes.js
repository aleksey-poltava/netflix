 import React from "react";
import { Route, Navigate } from "react-router-dom";

 export function IsUserRedirect({user, loggedInPath, children, ...rest}) {
    return (
         <Route
            {...rest}
            render = {() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Navigate
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }
                return null;
            }}
        />
    );
 }

 //https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
 //https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

 export function ProtectedRoute({user, children, ...rest}) {
     return (
         <Route 
            {...rest}
            render = {({ location }) => {
                if (user) {
                    return children;
                }
                if (!user) {
                    return (
                        <Navigate
                            to={{
                                pathname: 'signin',
                                state: {from: location},
                            }}
                        />
                    );
                }

                return null;
            }}
         />
     );
 }