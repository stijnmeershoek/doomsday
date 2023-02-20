// Doomsday Algorithm
function getCenturyAnchorday(year) {
  return 5 * (Math.floor(year / 100) % 4) + 2;
}

function getYearAnchorDay(year) {
  const centuryAnchorday = getCenturyAnchorday(year);
  const shortYear = year % 100;

  return (shortYear + Math.floor(shortYear / 4) + centuryAnchorday) % 7;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getNearestDoomsday(year, month) {
  const leapYear = isLeapYear(year);

  switch (month) {
    case 1:
      return !leapYear ? 3 : 4;
    case 2:
      return !leapYear ? 28 : 29;
    case 3:
      return 0;
    case 4:
      return 4;
    case 5:
      return 9;
    case 6:
      return 6;
    case 7:
      return 11;
    case 8:
      return 8;
    case 9:
      return 5;
    case 10:
      return 10;
    case 11:
      return 7;
    case 12:
      return 12;
  }
}

function getWeekday(date) {
  const doomsday = getNearestDoomsday(date.getFullYear(), date.getMonth() + 1);
  const yearAnchorDay = getYearAnchorDay(date.getFullYear());

  return (yearAnchorDay + (date.getDate() - doomsday) + 35) % 7;
}
