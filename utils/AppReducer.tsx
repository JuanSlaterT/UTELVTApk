import { CORRECT_LOGIN, LOGOUT } from "./AppTypes";

export default function AppReducer(state: any, action: any){
    const { payload, type } = action;
    switch (type){
        case CORRECT_LOGIN:
            return {
                ...state,
                usuario: payload,
            }
        case LOGOUT:
            return {
                ... state,
                usuario: undefined
            }
    }
}