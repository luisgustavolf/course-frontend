import React from "react";
import { IAuthContextValues } from "./iAuthContextValues";

export const AuthContext = React.createContext<IAuthContextValues>({
  isAuth: false,
  loading: false,
  signin: () => {},
  signout: () => {}
})