import { userService } from "../../services/userService"

export const login = ( ) => {
    return async (dispatch) => {
        const user = await userService.login()
        dispatch({ type: 'LOGIN', loggedInUser: user })
    }
}


export const logout = ( loggedInUser ) => {
    return async (dispatch) => {
        const user = await userService.logout()
        dispatch({ type: 'LOGOUT', loggedInUser: user })
    }
}