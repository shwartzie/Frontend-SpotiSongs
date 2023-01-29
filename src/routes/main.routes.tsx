import React from 'react';

import { Home } from "Features/Home/pages/Home";
import { Layout } from "Features/Layout/pages/Layout";
import { Search } from "Features/Search/pages/Search";
import { Route, Routes } from "react-router-dom";
import { LogInPage } from 'Features/UserCommon/Login/pages/LogInPage';
import { SignUpPage } from 'Features/UserCommon/Signup/pages/SignUpPage';
import { NotFound } from 'Features/NotFound/pages/NotFound';


export const MainRoutes = () => {

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="login" element={<LogInPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};;