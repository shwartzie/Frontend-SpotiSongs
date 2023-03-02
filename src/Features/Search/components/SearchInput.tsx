import { useAuth } from "hooks/authHooks";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

type SearchInputProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};
// const spotifyApi = new SpotifyWebApi({
//     clientId: "42f2800f08eb405abb7ea297b337bba2",
// });

export const SearchInput = ({ setQuery, query }: SearchInputProps) => {
    const { spotifyApi, isLoading } = useAuth("", true);
    const navigate: NavigateFunction = useNavigate();

    const { tokenData }: any = useSelector((state: any) => state.userModule);
    // console.log("got access token", tokenData?.accessToken);
    useEffect(() => {
        if (!query) return;
        if (!tokenData?.accessToken) {
            navigate("/login");
            return;
        }

        spotifyApi.searchTracks("linkinpark").then((res) => {
            console.log("searchTracks", res);
        });
    }, [query]);

    const handleRemove = (): void => {
        // setQuery("");
    };

    const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterBy = event.target.value;
        // "linkinpark"
        setQuery(filterBy);

        // return utilService.debounce( () => {
        //     console.log("trying to debounce", filterBy);
        //     return spotifyApi.searchTracks(filterBy);
        // });
    };

    // const filterBy = event.target.value;
    //     return await utilService.debounce(async () => {
    //         console.log("trying to debounce", filterBy);
    //         return await spotifyApi.searchTracks(filterBy);
    //     });
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
