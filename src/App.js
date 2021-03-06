import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as ROUTES from './constants/routes';
import {Home, SignIn, SignUp, Browse} from "./pages";

import { IsUserLoggedIn as IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {

  const {user} = useAuthListener();

  return (
    <Router> 
      <Routes> 
          <Route
            path={ROUTES.SIGN_IN}
            element={
              <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
              >
                <SignIn />
              </IsUserRedirect>
            }
          />
          <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route 
            path={ROUTES.BROWSE}
            exact
            element={
              <ProtectedRoute
                user={user}
                authPath={ROUTES.SIGN_IN}
              >
                <Browse />
              </ProtectedRoute>
            }
          />
      </Routes>
    </Router>
  );
}