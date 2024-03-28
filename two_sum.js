/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = {};
    let otherNum;
    for ( let i = 0; i < nums.length; i++){
        otherNum = target - nums[i];  
        if (otherNum in numMap && i !== numMap[otherNum]){
            return [numMap[otherNum], i];
        }
        numMap[nums[i]] = i;      
    }

    return []
};

// Test case 1: Basic example
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]

// Test case 2: No solution
console.log(twoSum([2, 7, 11, 15], 10)); // Expected output: []

// Test case 3: Multiple valid solutions
console.log(twoSum([3, 2, 4], 6)); // Expected output: [1, 2]

// Test case 4: Empty input array
console.log(twoSum([], 9)); // Expected output: []

/*

The provided JavaScript code defines a function named twoSum that takes an array of numbers (nums) and a target number (target) as arguments. The function is designed to find two numbers in the array that add up to the target number and return their indices.

The function uses a hash map (numMap) to store the numbers it has encountered in the array and their corresponding indices. The keys in this hash map are the numbers from the array, and the values are their indices.

The for loop iterates over the nums array. For each number, it calculates the difference between the target and the current number (otherNum). This is the number that, when added to the current number, equals the target.

The function then checks if otherNum is a key in numMap and if its value (the index) is not the same as the current index. The second condition is necessary to ensure that the function doesn't use the same element twice. If both conditions are met, the function returns an array containing the index of otherNum and the current index.

If otherNum is not in numMap or its index is the same as the current index, the function adds the current number and its index to numMap.

If the function goes through the entire array without finding two numbers that add up to the target, it returns an empty array. This is the main difference from the previous example, where the function would implicitly return undefined in this case.

*/