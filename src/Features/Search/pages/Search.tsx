import React, { useState } from 'react';
import { SearchInput } from '../components/SearchInput';
import { SearchLayout } from '../Features/Layout/pages/SearchLayout';
export const Search = () => {
    console.log("Search");
   

    return (
        <div className='search-container'>
           
            <SearchLayout/>
            {/* <MainSearchPage/>
            <RelatedSearchPage/>
            <FilteredSongsPage/> */}
        </div>
    );
}

