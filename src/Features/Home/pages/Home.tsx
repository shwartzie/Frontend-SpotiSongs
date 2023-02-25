import React, { useEffect, useState } from "react";

import { FavouritesTitle } from "../components/FavouritesTitle";
import { Favourites } from "../components/Favourites";
import { useAuth } from "../../../hooks/authHooks";
import { userService } from "Features/UserCommon/services/user.service";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../common/Components/Loading";
const code: string = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
    const navigate = useNavigate();

    const { accessToken, isLoading  } = useAuth(code);

    console.log("Home");
    return (
        <main>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <div className="landing-page-header-and-favourites-container">
                        <section className="landing-page-header-and-favourites-section">
                            <FavouritesTitle />
                            <Favourites />
                        </section>
                    </div>
                </div>
            )}
        </main>
    );
};
