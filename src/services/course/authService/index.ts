import { CourseApi } from "../client";
import { IAuthedResponse } from "./iAuthedResponse";
import { ISigninBody } from "./iSigninBody";
import { ISigninResponse } from "./iSigninResponse";

export class AuthService {
  static async signin(data: ISigninBody) {
    const response = await CourseApi.post<ISigninResponse>('/auth/signin', data)
    return response.data
  }

  static async authed() {
    const response = await CourseApi.get<IAuthedResponse>('/auth/authed')
    return response.data
  }
}