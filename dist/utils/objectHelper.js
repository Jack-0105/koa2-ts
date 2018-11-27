"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todayObject_1 = require("../data/todayObject");
const tomorrowObject_1 = require("../data/tomorrowObject");
const weekObject_1 = require("../data/weekObject");
const monthObject_1 = require("../data/monthObject");
const yearObject_1 = require("../data/yearObject");
const objectHelper = {
    getTodayToObject(todayInfo) {
        return new todayObject_1.default(todayInfo);
    },
    getTomorrowToObject(tomorrowInfo) {
        return new tomorrowObject_1.default(tomorrowInfo);
    },
    getWeekToObject(weekInfo) {
        return new weekObject_1.default(weekInfo);
    },
    getMonthToObject(monthInfo) {
        return new monthObject_1.default(monthInfo);
    },
    getYearToObject(yearInfo) {
        return new yearObject_1.default(yearInfo);
    },
};
exports.objectHelper = objectHelper;
//# sourceMappingURL=objectHelper.js.map