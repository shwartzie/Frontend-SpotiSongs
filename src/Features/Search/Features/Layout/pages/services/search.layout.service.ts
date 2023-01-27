import { utilService } from "common/services/util.service";

import axios from "common/services/Server/axios";


export const searchLayoutService = {
    query,
    queryDemo
};


async function query() {

}

function queryDemo() {
    try {
        const res = axios.get('api/genres/query')
        console.log(res)
        return res
    } catch (err) {

    }
}

// function queryDemo() {
//     return [
//         {
//             id: utilService.makeId(),
//             name: "Podcasts",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Made For You",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "New relaeses",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Pop",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Hip-Hop",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Rock",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Latin",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Charts",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Live Events",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Dance/Electronic",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Mood",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Indie",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Workout",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Discover",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Country",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "R&B",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "K-pop",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Chill",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Sleep",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Party",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "At Home",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Mood",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Decades",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Romance",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Metal",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Jazz",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Trending",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Wellness",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Anime",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Gaming",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Folk & Acoustic",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Focus",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Soul",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Kids & Family",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Classical",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "TV & Movies",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Instrumental",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Punk",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Ambient",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Netflix",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Blues",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Cooking & Dining",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Alternative",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Travel",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Caribbean",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Afro",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "GLOW",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "SongWriters",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Funk & Disco",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "League of Legends",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Spotify Singles",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Summer",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "EQUAL",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "RADAR",
//             imageUrl: ""
//         },
//         {
//             id: utilService.makeId(),
//             name: "Fresh Finds",
//             imageUrl: ""
//         },

//     ];
// }

