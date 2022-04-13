import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ROUTES from './constants/routes';
import {Home, SignIn, SignUp, Browse} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}