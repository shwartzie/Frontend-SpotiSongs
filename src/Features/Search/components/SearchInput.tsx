import React from 'react';


export const SearchInput = () => {
    
    return (
        <div className='search-input-container'>
            <form role="search">
                <span></span>
                <input maxLength={800} autoCorrect="off" placeholder="What do you want to listen to?" />
                <button></button>
            </form>
        </div>
    );
}

