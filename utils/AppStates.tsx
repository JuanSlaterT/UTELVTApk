import React, { useCallback, useMemo, useReducer } from "react"
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { CORRECT_LOGIN, LOGOUT } from "./AppTypes";

export default function AppStates({ children }) {
    const initialState = useMemo(
        () => ({
            usuario: null,
        }), []
    )
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const handleLogIn = useCallback(async (values: any) => {
        dispatch({ type: CORRECT_LOGIN, payload: values })
        global.setRank(values?.rango)
        global.setLogged(true)
    }, [])

    const handleLogOut = useCallback(async (values: any) => {
        dispatch({ type: LOGOUT })
        global.setLogged(false)
        global.setRank(null)
       
    }, [])

    return (
        <AppContext.Provider
            value={{
                usuario: state.usuario,
                handleLogIn,
                handleLogOut
            }}
        >
            {children}
        </AppContext.Provider>
    )
}