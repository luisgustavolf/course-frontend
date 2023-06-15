import { ISigninBody } from "../../services/course/authService/iSigninBody"

export interface IAuthContextValues {
  isAuth: boolean
  loading: boolean
  signin: (values: ISigninBody, fn: () => void) => void
  signout: () => void
}