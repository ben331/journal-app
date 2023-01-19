import { singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuth = (email, password) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = (email, password) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()

        if( !result.ok) return dispatch(logout(result))

        dispatch(login( result ))
    }
}