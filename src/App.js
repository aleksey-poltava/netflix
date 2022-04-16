import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as ROUTES from './constants/routes';
import {Home, SignIn, SignUp, Browse} from "./pages";

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = null;

  return (
    <Router> 
      <Routes>
          <IsUserRedirect
              user = {user}
              loggedInPath = {ROUTES.BROWSE}
              path = {ROUTES.SIGN_IN}
          >
            <SignIn />
          </IsUserRedirect>
          <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse />
          </ProtectedRoute>
          <Route exact path={ROUTES.BROWSE} element={<Browse />} />
      </Routes>
    </Router>
  );
}