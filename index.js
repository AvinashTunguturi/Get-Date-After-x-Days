const addDays = require("date-fns/addDays");
const format = require("date-fns/format");
const dateAfterDays = (days) => {
  const calculatedDate = addDays(new Date(2020, 7, 22), days);
  const result = format(new Date(calculatedDate), "dd-MM-yyyy");
  return result;
};
module.exports = dateAfterDays;
