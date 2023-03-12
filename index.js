function getCurrentDate() {
    return new Date()
}

function dateToString() {
    const today = new Date();
    const dateSrc = today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    return dateSrc.split(".").reverse().join("-");
}

function stringToDate(date) {
    return Date.parse(date)
}

function diffDates(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let years = (date1 - date2) / (1000 * 3600 * 24 * 365)
    let days = (date1 - date2) / (1000 * 3600 * 24) - ((Math.floor(years)) * 365)
    let hours = (days - Math.floor(days)) * 24
    let mins = (hours - Math.floor(hours)) * 60;
    let secs = Math.floor((mins - Math.floor(mins)) * 60);
    years = Math.floor(years)
    days = Math.floor(days);
    hours = Math.floor(hours);
    mins = Math.floor(mins);
    return `${years} years, ${days} days, ${hours} hours, ${mins} minutes and ${secs} seconds`
}

export { getCurrentDate, dateToString, stringToDate, diffDates };
