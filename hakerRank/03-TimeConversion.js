function timeConversion(s) {
  const type = s.slice(8, 10);

  const pm = {
    12: "12",
    "01": "13",
    "02": "14",
    "03": "15",
    "04": "16",
    "05": "17",
    "06": "18",
    "07": "19",
    "08": "20",
    "09": "21",
    10: "22",
    11: "23",
  };

  if (type === "AM") {
    if (s.slice(0, 2) === "12") {
      return "00" + s.slice(2, 8);
    }
    return s.slice(0, 8);
  } else {
    const first = s.slice(0, 2);
    const slice = s.slice(2, 8);
    return `${pm[first] + slice}`;
  }
}

module.exports = { timeConversion };

// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45
