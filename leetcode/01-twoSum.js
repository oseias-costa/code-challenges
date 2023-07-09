function twoSum(nums, target) {
    const numbers = {
      first: 0,
      second: 0,
    };
    nums.map((item, index1) => {
      nums.map((two, index2) => {
        let count = item + two;
        let diference = index2 > 0;
        if (numbers.second === 0) {
          if (diference && count === target) {
            numbers.first = index1;
            numbers.second = index2;
          }
        }
      });
    });
    return [numbers.first, numbers.second];
  }
  
  module.exports = { twoSum };
  