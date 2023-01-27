import React, { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

type SearchInputProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchInput = ({ setQuery, query }: SearchInputProps) => {

    const navigate: NavigateFunction = useNavigate();

    const handleRemove = (): void => {
        setQuery("");
    };

    const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
    };

    return (
        <div className='search-input-container'>
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
}

