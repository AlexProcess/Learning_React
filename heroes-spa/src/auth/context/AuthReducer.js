import { types } from "../types/types";

export const initialState = {
    logged: false,
}

export const AuthReducer = (state = {}, action) =>{
    switch (action.type) {

        case types.login:

            return{
                ...state,
                logged: true,
                name: action.payload,
            }
            
            case type.logout:
                return{
                    logged: false,
                }
    
        default:
            return initialState;
    }

}