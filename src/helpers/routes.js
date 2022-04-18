 import React from "react";
import { Navigate } from "react-router-dom";


 export function IsUserLoggedIn({user, loggedInPath, children }) {
    // If user already logged in and goes to signin, redirect him to browse
    
    return !user ? children : <Navigate to={loggedInPath} />;
 }

 //https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
 //https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

 export function ProtectedRoute({ user, children, authPath }) {
     
     return user ? children : <Navigate to={authPath} />;
 }