import { InternalAxiosRequestConfig } from 'axios'
import { AuthInforStorage } from '../../storage/authInfo'

export async function tokenInterceptor(configs: InternalAxiosRequestConfig) {
  const token =  AuthInforStorage.get()?.token 
  
  if (token) {
    configs.headers.Authorization = `Bearer ${token}`
  }

  return configs
}
