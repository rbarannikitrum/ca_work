/* Файл date-utils.js */
const MSEC_IN_DAY = 86400000;
const MSEC_IN_HOUR = 3600000;
const MSEC_IN_MINUTE = 60000;

function getCurrentDate() {
    return new Date();
}

function convertDateToString(date) {
    return date.toISOString();
}

function convertStringToDate(str) {
    return new Date(Date.parse(str));
}

function calculateDaysBetweenDates(startDate, endDate) {
    const start = getNormalTime(startDate).getTime();
    const end = getNormalTime(endDate).getTime();
    const diff = Math.abs(end - start);
    return Math.floor(diff / MSEC_IN_DAY);
}

function calculateHoursBetweenDates(startDate, endDate) {
    const start = startDate.getTime();
    const end = endDate.getTime();
    const diff = Math.abs(end - start);
    return Math.floor(diff / MSEC_IN_HOUR);
}

function calculateMinutesBetweenDates(startDate, endDate) {
    const start = startDate.getTime();
    const end = endDate.getTime();
    const diff = Math.abs(end - start);
    return Math.floor(diff / MSEC_IN_MINUTE);
}

function getNormalTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

console.log(calculateHoursBetweenDates(new Date('12.02.2001'), new Date('11.11.1999')))

module.exports = { getCurrentDate, convertDateToString, convertStringToDate, calculateDaysBetweenDates, calculateHoursBetweenDates, calculateMinutesBetweenDates };
