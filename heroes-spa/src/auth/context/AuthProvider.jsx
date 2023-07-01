import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState = {
        logged: false,
}

export const AuthProvider = ({children}) => {
    const {authState, dispach} = useReducer(AuthReducer, initialState)

    const login = async( name = '' ) => {
      const action = {
        types: types.login,
        payload: {
          id: "ABC",
          name: name,
        }
      }
    }
  return (

    <AuthContext.Provider value={{
      authState,
      login: login,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
