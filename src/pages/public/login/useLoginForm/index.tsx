import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ILoginFormValues } from './iLoginFormValues'
import { validationSchema } from './validationSchema'

export function useLoginForm() {
  const form = useForm<ILoginFormValues>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(validationSchema)
  })
  
  return {
    ...form 
  }
}