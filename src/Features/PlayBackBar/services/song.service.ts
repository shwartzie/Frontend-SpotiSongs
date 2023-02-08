import axios from '../../../common/services/Server/axios';



export const songService = {
    get,
    query
};

async function query(filterBy = {}) {
    try {
        return await axios.get('/api/songs/');

    } catch (error) {
        console.log(error);
        return error.response;
    }
}

async function get() {
    try {
        return getDemoSongs();
    } catch (error) {
        console.log(error);

    }
}

function getDemoSongs() {
    return [
        {
            "title": "Drake - Forever",
            "url": "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
        },
        {
            "title": "Linking Park - In the end",
            "url": "https://www.youtube.com/watch?v=eVTXPUF4Oz4&ab_channel=LinkinPark"
        },
        {
            "title": "Travis Scott - Stop trina be God",
            "url": "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
        }
    ];
}