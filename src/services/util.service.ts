export const utilService = {
    getCurrentDayStatus
}

function getCurrentDayStatus(): string {
    const currentTime: () => Date = new Date().getHours();
    let title = ""
    if (currentTime < 12) {
        title = "Good Morning";
    } else if(currentTime < 22) {
        title = "Good Evening";
    } else {
        title = "Good Night";
    }
    return title
}