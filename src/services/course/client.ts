import axios from "axios";
import { tokenInterceptor } from "./tokenInterceptor";

export const CourseApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

CourseApi.interceptors.request.use(tokenInterceptor)