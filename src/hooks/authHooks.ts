import { userService } from "Features/UserCommon/services/user.service";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = (code: string) => {
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState<string>(null);
    const [refreshToken, setRefreshToken] = useState<string>(null);
    const [expiresIn, setExpiresIn] = useState<number>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!code) {
            navigate("/login");
            return;
        }
        userService
            .loginWithSpotify(code)
            .then(({ data: { accessToken, refreshToken, expiresIn }, status }) => {
                if ((status = 200)) {
                    navigate("/");
                    setAccessToken(accessToken);
                    setRefreshToken(refreshToken);
                    setExpiresIn(expiresIn);
                    setIsLoading(false);
                    code = null;
                }
            })
            .catch((error) => {
                console.error(`Failed to login: ${error}`);
                navigate("/login");
            });
    }, [code]);

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
        if ((code && !refreshToken) || !expiresIn) return;
        handleRefreshToken(refreshToken);
    }, [refreshToken, expiresIn]);

    return {
        accessToken,
        refreshToken,
        expiresIn,
        setAccessToken,
        setRefreshToken,
        setExpiresIn,
        isLoading,
        handleRefreshToken,
    };
};
