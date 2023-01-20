export const utilService = {
    getCurrentDayStatus,
    getCurrentAsideOption
};

function getCurrentDayStatus(): string {
    const currentTime: () => Date = new Date().getHours();
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
        default:
            currentOption = capitalizedString;
            break;
    }
    return currentOption;
}