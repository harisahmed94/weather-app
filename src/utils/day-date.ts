const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const dateParser = (date: string): [string, number, string] => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth();
  const day = dateObj.getDay();
  return [daysOfWeek[day], dateObj.getDate(), monthNames[month]];
};
