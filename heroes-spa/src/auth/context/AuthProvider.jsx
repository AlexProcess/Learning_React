import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

const initialState = {
        logged: false,
}

export const AuthProvider = ({children}) => {
    const {authState, dispach} = useReducer(AuthReducer, initialState)
  return (

    <AuthContext value={{}}>
        {children}
    </AuthContext>
  )
}
