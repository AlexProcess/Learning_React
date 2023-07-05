import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState = {
      logged: false,
}

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') )

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init)

    const login = async( name = '' ) => {
      const user = {id: "ABC", name}
      
      const action = {
        type: types.login,
        payload: {
          id: "ABC",
          name: name,
        }
      }
      localStorage.setItem('user', JSON.stringify(user))
      
      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
