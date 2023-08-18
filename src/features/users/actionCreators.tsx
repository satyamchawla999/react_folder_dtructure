import { createAsyncThunk } from '@reduxjs/toolkit'

import { userSignin, userSignup } from '../../service/user.service'
import { ACTION_TYPE } from './actionType'
import { type User } from './usersSlice'

export const addUser = createAsyncThunk(
  ACTION_TYPE.ADD_USER, async (userData: User) => {
    try {
      const response = await userSignup(userData)
      return response.data.newUser
    } catch (err) {
      console.log(err)
    }
  }
)

export const signIn = createAsyncThunk(
  ACTION_TYPE.SIGN_IN, async (userData: User) => {
    try {
      const response = await userSignin(userData)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
)
