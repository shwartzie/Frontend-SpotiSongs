import { userService } from "Features/UserCommon/services/user.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { setSpotifyToken } from "store/actions/userActions";

const spotifyApi = new SpotifyWebApi({
    clientId: "42f2800f08eb405abb7ea297b337bba2",
});

export const useAuth = (code: string = "", isGettingData: boolean) => {
    const [accessToken, setAccessToken] = useState<string>(null);
    const [refreshToken, setRefreshToken] = useState<string>(null);
    const [expiresIn, setExpiresIn] = useState<number>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const { tokenData }: any = useSelector((state: any): any => state.userModule);

    const payLoad = {
        accessToken,
        refreshToken,
        expiresIn,
        setAccessToken,
        setRefreshToken,
        setExpiresIn,
        isLoading,
        spotifyApi
    };

    if (isGettingData) return payLoad;

    console.log(tokenData);

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!code || code === "") return;
        dispatch(setSpotifyToken({ code }));
    }, [code]);

    useEffect(() => {
        if (accessToken) return;
        // console.log(accessToken, tokenData?.accessToken);

        if (tokenData && accessToken !== tokenData.accessToken) {
            navigate("/");
            setAccessToken(tokenData.accessToken);
            setRefreshToken(tokenData.refreshToken);
            setExpiresIn(tokenData.expiresIn);
            setIsLoading(false);
        }
    }, [tokenData]);

    const handleRefreshToken = async (refreshToken: string) => {
        const interval = setInterval(async () => {
            setIsLoading(true);
            try {
                const {
                    data: { accessToken, newRefreshToken, expiresIn },
                    status,
                } = await userService.getRefreshToken(refreshToken);
                if (status !== 200) {
                    throw new Error("Failed to refresh token");
                    navigate("/login");
                    return;
                }
                setIsLoading(false);
                setAccessToken(accessToken);
                setRefreshToken(newRefreshToken);
                setExpiresIn(expiresIn);
            } catch (error) {
                console.error(`Failed to get refreshToken: ${error}`);
            }
        }, (expiresIn - 60) * 1000);
        return () => clearInterval(interval);
    };
    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        handleRefreshToken(refreshToken);
    }, [refreshToken, expiresIn]);

    return payLoad;
};
