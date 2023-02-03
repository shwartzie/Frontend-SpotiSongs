export const songService = {
    get
};


async function get() {
    try {
        const demoSongs = getDemoSongs();
        return demoSongs
    } catch (error) {

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
            "url": "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
        },
        {
            "title": "Travis Scott - Stop trina be God",
            "url": "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
        }
    ];
}