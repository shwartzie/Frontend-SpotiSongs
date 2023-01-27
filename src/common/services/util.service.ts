export const utilService = {
    getCurrentDayStatus,
    getCurrentAsideOption,
    makeId
};

function getCurrentDayStatus(): string {
    const currentTime = new Date().getHours();
    let title = "";
    if (currentTime < 12) {
        title = "Good Morning";
    } else if (currentTime < 22) {
        title = "Good Evening";
    } else {
        title = "Good Night";
    }
    return title;
}

function getCurrentAsideOption(option: string): string {
    const capitalizedString: string = option[0].toUpperCase() + option.slice(1);


    let currentOption: string = "";

    switch (option) {
        case "library":
            currentOption = `Your ${capitalizedString}`;
            break;
        case "likedSongs":
            currentOption = "Liked Songs";
            break;
        case "createPlaylist":
            currentOption = "Create Playlist";
            break;
        default:
            currentOption = capitalizedString;
            break;
    }
    return currentOption;
}

function makeId(length = 24) {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
