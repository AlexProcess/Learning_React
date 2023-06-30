import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer, initialState } from './AuthReducer'

export const AuthProvider = ({children}) => {
    const {authState, dispach} = useReducer(AuthReducer, initialState)
  return (

    <AuthContext value={{}}>
        {children}
    </AuthContext>
  )
}
