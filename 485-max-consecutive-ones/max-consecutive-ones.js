/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0, maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1) {
            maxCount = Math.max(maxCount,count);
            count = 0;
        } else {
            count++;
        }
    }

    return Math.max(maxCount,count);
};