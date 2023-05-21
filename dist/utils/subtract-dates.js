"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractDates = void 0;
const subtractDates = async (dateToSubtract) => {
    const currentDate = new Date(new Date().toLocaleDateString());
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const utcCurrentDate = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay());
    const utcDateToSubtract = Date.UTC(dateToSubtract.getFullYear(), dateToSubtract.getMonth(), dateToSubtract.getDay());
    return Math.floor((utcCurrentDate - utcDateToSubtract) / millisecondsPerDay);
};
exports.subtractDates = subtractDates;
//# sourceMappingURL=subtract-dates.js.map