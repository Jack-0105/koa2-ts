import TodayObject from '../data/todayObject';
import TomorrowObject from '../data/tomorrowObject';
import WeekObject from '../data/weekObject';
import MonthObject from '../data/monthObject';
import YearObject from '../data/yearObject';

const objectHelper = {
     getTodayToObject(todayInfo) {
        return new TodayObject(todayInfo);
    },
    getTomorrowToObject(tomorrowInfo) {
        return new TomorrowObject(tomorrowInfo);
    },
    getWeekToObject(weekInfo) {
        return new WeekObject(weekInfo);
    },
    getMonthToObject(monthInfo) {
        return new MonthObject(monthInfo);
    },
    getYearToObject(yearInfo) {
        return new YearObject(yearInfo);
    },
}

export {
    objectHelper
}

