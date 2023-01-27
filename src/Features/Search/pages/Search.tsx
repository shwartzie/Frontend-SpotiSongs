import React, { useState } from 'react';
import { SearchInput } from '../components/SearchInput';
import { SearchLayout } from '../Features/Layout/pages/SearchLayout';
export const Search = () => {
    console.log("Search");
    const [query, setQuery] = useState<string>("");



    return (
        <div className='search-container'>
            <SearchInput setQuery={setQuery} query={query}/>
            <SearchLayout/>
            {/* <MainSearchPage/>
            <RelatedSearchPage/>
            <FilteredSongsPage/> */}
        </div>
    );
}

