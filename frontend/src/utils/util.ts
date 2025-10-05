export const fetchToday = async () => {
  const today = new Date();
  const dayIndex = today.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[dayIndex];
  const dayNumber = today.getDate();
  const monthName = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const dateToday = `${monthName} ${dayNumber}, ${dayName} - ${year}`;
  console.log(dateToday);
  return {
    today: dateToday,
    date: dayNumber.toString(),
    month: monthName,
    year: year,
    day: dayName,
  };
};
