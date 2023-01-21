import React from 'react';
import { FavouritePreview } from './FavouritePreview';
export const Favourites = () => {
    const song = { songName: "Casper", id: "1" };

    const playlist: any = {
        id: "2",
        songs: [song],
        title: "Your PlayList",
        imageUrl: ""

    };

    const likedSongs: any = {
        id: "3",
        songs: [song],
        title: "Liked Songs",
        imageUrl: ""
    };

    const album1 = {
        id: "4",
        songs: [song],
        title: "album1",
        imageUrl: ""
    };
    const album2 = {
        id: "5",
        songs: [song],
        title: "album2",
        imageUrl: ""
    };
    const album3 = {
        id: "6",
        songs: [song],
        title: "album3",
        imageUrl: ""
    };

    const album4 = {
        id: "7",
        songs: [song],
        title: "album4",
        imageUrl: ""
    };
    const favourites: any[] = [playlist, likedSongs, album1, album2, album3, album4];

    // console.log(favourites);

    return (
        <section className="favourites-container"> 
            {favourites && favourites.map((favourite) => (
                <FavouritePreview favourite={favourite} key={favourite.id} />
            ))}
        </section>
    );
}

