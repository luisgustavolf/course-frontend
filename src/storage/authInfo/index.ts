import { JsonStorage } from "../../lib/localstorage/jsonStorage";
import { AuthInforValues } from "./iAuthInfoValues";

export const AuthInforStorage = new JsonStorage<AuthInforValues>('AUTH_INFO')