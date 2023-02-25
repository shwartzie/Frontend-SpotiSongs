import React, { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useAuth } from "hooks/authHooks";
import SpotifyWebApi from "spotify-web-api-node";

type SearchInputProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};
const spotifyApi = new SpotifyWebApi({
    clientId: "42f2800f08eb405abb7ea297b337bba2",
});

export const SearchInput = ({ setQuery, query }: SearchInputProps) => {
    const { accessToken, isLoading } = useAuth();

    const navigate: NavigateFunction = useNavigate();

    const handleRemove = (): void => {
        setQuery("");
    };

    const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
    };

    return (
        <div className="search-input-container">
            <form role="search">
                <span></span>
                <input
                    maxLength={800}
                    autoCorrect="off"
                    placeholder="What do you want to listen to?"
                    value={query}
                    onChange={(event) => handleQuery(event)}
                />
                <button onClick={() => handleRemove()}></button>
            </form>
        </div>
    );
};
