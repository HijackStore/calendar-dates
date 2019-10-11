var CalendarGrid = (function() {
  var MONTHS = function(year) {
    return [
      {
        name: "January",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 0, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "February",
        days() {
          return isLeapYear(year) ? 29 : 28;
        },
        firstDayOfMonth() {
          return new Date(year, 1, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 28, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "March",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 2, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "April",
        days() {
          return 30;
        },
        firstDayOfMonth() {
          return new Date(year, 3, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 30, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "May",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 4, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "June",
        days() {
          return 30;
        },
        firstDayOfMonth() {
          return new Date(year, 5, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 30, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "July",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 6, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "August",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 7, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "September",
        days() {
          return 30;
        },
        firstDayOfMonth() {
          return new Date(year, 8, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 30, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "October",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 9, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "November",
        days() {
          return 30;
        },
        firstDayOfMonth() {
          return new Date(year, 10, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 30, 1, 0, 0, 0).getDay();
        }
      },
      {
        name: "December",
        days() {
          return 31;
        },
        firstDayOfMonth() {
          return new Date(year, 11, 1, 0, 0, 0).getDay();
        },
        lastDayOfMonth() {
          return new Date(year, 31, 1, 0, 0, 0).getDay();
        }
      }
    ];
  };
  var isLeapYear = function(year) {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  };
  var createMonth = function(days, offset) {
    let month = [];
    for (i = offset; i < days; i++) {
      let input = i < 0 ? "" : i + 1;
      month.push(input);
    }
    let weeks = [];
    do {
      if (month.length < 7) {
        weeks.push(month);
        break;
      } else {
        weeks.push(month.splice(0, 7));
      }
    } while (month.length);
    return weeks;
  };
  var calendarDates = function(year, month) {
    month = MONTHS(year)[month];
    let days = month.days();
    let offset = month.firstDayOfMonth() * -1 + 1;
    return createMonth(days, offset);
  };
  
  return {
    getGrid(year, month) {
      return calendarDates(year, month)
    }
  }
  
})();
