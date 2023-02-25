import { userService } from "../../Features/UserCommon/services/user.service";

type UserToLogIn = {
    username: string;
    password: string;
};
export const login = (userToLogIn: UserToLogIn) => {
    return async (dispatch) => {
        try {
            console.log("userActions login", userToLogIn);
            const { data, status } = await userService.login(userToLogIn);
            if (status !== 200) {
                throw new Error(`User was not found, following error: ${data.error}`);
                return;
            }
            console.log("userActions dispatching...", data);
            dispatch({ type: "LOGIN", loggedInUser: data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const logout = (loggedInUser) => {
    return async (dispatch) => {
        // const user = await userService.logout()
        // dispatch({ type: 'LOGOUT', loggedInUser: user })
    };
};
