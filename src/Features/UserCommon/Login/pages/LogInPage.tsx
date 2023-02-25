import React, { useEffect } from "react";
import { userService } from "../../services/user.service";
import { login } from "../../../../store/actions/userActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { useAuth } from "../../../../hooks/authHooks";

const demoUser = {
    username: "admin",
    password: "admin",
};
const AuthUrl: string =
    "https://accounts.spotify.com/authorize?client_id=42f2800f08eb405abb7ea297b337bba2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const LogInPage = () => {
    const dispatch: any = useDispatch();

    const handleLogin = async () => {
        // dispatch(login({ ...demoUser }));
    };

    return (
        <>
            <div>
                <a href={AuthUrl} onClick={() => handleLogin()}>
                    Login With Spotify
                </a>

                {/* <button onClick={() => handleLogin()}>Login</button> */}
            </div>
        </>
    );
};
