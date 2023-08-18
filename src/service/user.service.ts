import { axiosApi } from '../config'

const PATHS = {
  signup: '/user/signup',
  signin: '/user/signin'
}

export const userSignup = async (payload: any) => await axiosApi.post(PATHS.signup, payload)
export const userSignin = async (payload: any) => await axiosApi.post(PATHS.signin, payload)
