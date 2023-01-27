import React, { useState } from 'react';
import { SearchLayoutPreview } from './components/SearchLayoutPreview';
import { searchLayoutService } from './services/search.layout.service';

export const SearchLayout = () => {

    const genres: string[] | any = searchLayoutService.queryDemo();

    return (
        <div>
            <SearchLayoutPreview />
        </div>
    );
}

