import { CORRECT_LOGIN } from "./AppTypes";

export default function AppReducer(state: any, action: any){
    const { payload, type } = action;
    switch (type){
        case CORRECT_LOGIN:
            return {
                ...state,
                usuario: payload,
            }
    }
}