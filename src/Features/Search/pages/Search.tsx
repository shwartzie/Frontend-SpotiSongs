import React from "react";
import { SearchLayout } from "../Features/Layout/pages/SearchLayout";

export const Search = () => {
    console.log("Search");
    return (
        <div className="search-container">
            <SearchLayout />
            {/* <MainSearchPage/>
            <RelatedSearchPage/>
            <FilteredSongsPage/> */}
        </div>
    );
};
