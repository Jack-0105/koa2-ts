function getDateToString() {
    var date = new Date();

    var currentDate = `${date.getUTCFullYear()}${(date.getMonth() + 1)}${date.getDate()}`;

    return currentDate;
}

function getWeekOfYear() {
    var today = new Date();
    var firstDay = new Date(today.getFullYear(), 0, 1);
    var dayOfWeek = firstDay.getDay();
    var spendDay = 1;
    if (dayOfWeek != 0) {
        spendDay = 7 - dayOfWeek + 1;
    }

    console.log(spendDay);
    
    firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
    var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
    var result = Math.ceil(d / 7);
    return result + 1;
};

export {
    getDateToString,
    getWeekOfYear
}