import { Title } from 'common/Components/Title';
import { utilService } from 'common/services/util.service';
import React, { useEffect, useState } from 'react';
import { SearchLayoutPreview } from './components/SearchLayoutPreview';
import { searchLayoutService } from './services/search.layout.service';

type Genre = {
    id: string;
    name: string;
    imageUrl: string;
    backgroundColor: string;
}

export const SearchLayout = () => {

    const [genres, setGenres] = useState<string[] | any>()

    useEffect(() => {
        const cb = async () => {
            const genres = await searchLayoutService.queryDemo();
            const updatedGenres = generateIds(genres);
            setGenres([...updatedGenres]);
        }
        cb()
    }, [])

    const title: string = "Broadcasts"


    return (
        <>
            <Title title={title} className={"search-layout-title"} />

            <article className='search-layout-container'>
                {genres && genres.map((genre: Genre) =>
                    (<SearchLayoutPreview genre={genre} key={genre.id} />)
                )}
            </article>
        </>

    );
}


function generateIds(genres: string[]) {
    return genres.map((genre: any) => {
        return {
            ...genre,
            id: utilService.makeId(16)
        }
    })
}