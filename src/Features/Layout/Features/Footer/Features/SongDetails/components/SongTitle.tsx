import React from 'react';

type SongTitleProps = {
    songName: string;
    authors: string[];
};

export const SongTitle = ({ songName, authors }: SongTitleProps) => {

    return (
        <div className='footer-song-title-container'>
            <span className='footer-song-name'>
                <a> {songName}</a>
            </span>

            <div className='footer-song-authors'>
                {authors && authors.map((author) => (
                    <span key={author}>
                        <a >
                            {author}
                        </a>
                    </span>
                ))}
            </div>
        </div>
    );
};