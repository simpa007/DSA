//DATA STRUCTURE AND ALGORITHM

//Question 1;
// sum of all natural number n

//solution 1
// function sumNum(n) {
// 	let sum = 0;
// 	for (let i = 1; i <= n; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
// const value = sumNum(5);
// console.log(value);

//solution 2
// function sumNum2(n) {
// 	return (n * (n + 1)) / 2;
// }
// const value2 = sumNum2(10);
// console.log(value2);

//Question 2
//Sum of digits of a number
//1234 = 1+2+3+4 = 10;
// function sumOfDigits(num) {
// 	let sum = 0;
// 	while (num > 0) {
// 		sum += num % 10;
// 		num = Math.floor(num / 10);
// 	}
// 	return sum;
// }

// console.log(sumOfDigits(1245));

//Question 3: count the number of digits of a number
//34252 : 5

// function countDigits(num) {
// 	let str = String(num);
// 	return str.length;
// }

// console.log(countDigits(1234567));

//Solution 2:
// function countDigits2(num) {
// 	num = Math.abs(num);
// 	let count = 0;
// 	do {
// 		count++;
// 		num = Math.floor(num / 10);
// 	} while (num > 0);
// 	return count;
// }

// console.log(countDigits2(-1234567));

//Question 4: Check if a number is palindrome
//Solution 1:
// function isPalindrome(num) {
// 	//convert Number to String
// 	let str = String(num);
// 	let defaultNum = str;
// 	let reverseNum = str.split("").reverse().join("");
// 	if (defaultNum === reverseNum) {
// 		return true;
// 	}
// 	return false;
// }

// console.log(isPalindrome(121));
//Solution 2:
// function isPalindrome(x) {
// 	let copyNum = x;
// 	let reverseNum = 0;
// 	while (copyNum > 0) {
// 		let lastDigit = copyNum % 10;
// 		reverseNum = reverseNum * 10 + lastDigit;
// 		//you need to take copyNum back to zero for the loop to stop running
// 		copyNum = Math.floor(copyNum / 10);
// 	}
// 	return x === reverseNum;
// }

// console.log(isPalindrome(1234));

//Question 5: fibonacci sequences
//solution 1
// let fibonacci = function (n) {
// 	let fib = [0, 1];
// 	for (let i = 2; i < n; i++) {
// 		fib[i] = fib[i - 1] + fib[i - 2];
// 	}
// 	return fib;
// };
// console.log(fibonacci(5));

//solution 2:
// let fibonacci = function (n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	let prev = 0;
// 	let current = 1;
// 	let next;
// 	for (let i = 2; i < n; i++) {
// 		next = prev + current;
// 		prev = current;
// 		current = next;
// 	}
// 	return next;
// };

// console.log(fibonacci(7));

// Question 6: Missing Number in an Array
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// let missingNumber = function (nums) {
// 	//sum up the array nums
// 	let sumOfArray = nums.reduce((a, b) => a + b);
// 	//find the length of nums and sum them up
// 	let sum = 0;
// 	for (let i = 1; i <= nums.length; i++) {
// 		sum += i;
// 	}
// 	//subtract it to find the missing number
// 	return sum - sumOfArray;
// };
// console.log(missingNumber([0, 1, 3]));

// One Line Solution:
//let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);

//Question 7: Count Odd Numbers in an Interval Range
//Solution 1: best solution
//var countOdds = function (low, high) {
//     if (low % 2 == 0 && high % 2 == 0) {
//         return Math.floor((high - low) / 2)
//     }
//     else {
//         return Math.ceil((high - low+1) / 2);
//     }
// };

//Solution 2: best solution
// var countOdds = function(l, h) {
// 	return Math.floor((h + 1) / 2) - Math.floor(l / 2);
// 	};

//solution 3:
// let countOdds = function (low, high) {
// 	let arr = [];
// 	for (let i = low; i <= high; i++) {
// 		if (i % 2 !== 0) {
// 			arr.push(i);
// 		}
// 	}
// 	return arr.length;
// };
// console.log(countOdds(8, 10));

// 412. Fizz Buzz
//SOLUTION 1:
// const fizzBuzz = (n) => {
//     let res = []

//     for (let i = 1; i <= n; i++){
//         let string = ''
//         if (i % 3 === 0) string += 'Fizz'
//         if (i % 5 === 0) string += 'Buzz'

//         if (string === '') string += i
//         res.push(string)
//     }

//     return res
// };
//SOLUTION 2:
// var fizzBuzz = function (n) {
// 	let arr = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			arr.push("FizzBuzz");
// 		} else if (i % 3 === 0) {
// 			arr.push("Fizz");
// 		} else if (i % 5 === 0) {
// 			arr.push("Buzz");
// 		} else {
// 			arr.push(String(i));
// 		}
// 	}
// 	return arr;
// };
// console.log(fizzBuzz(25));

//POWER OF TWO
// var isPowerOfTwo = function (n) {
// 	if (n == 0) return 0;
// 	while (n != 1) {
// 		if (n % 2 != 0) return false;
// 		n = n / 2;
// 	}
// 	return true;
// };
// console.log(isPowerOfTwo(2));

//Question: Find the square root of a Number
// var mySqrt = function(x) {
//     let left = 0;
//     let right = x;
//     while(left <= right) {
//         const mid = Math.floor((left+right)/2);
//         if(mid*mid <= x && (mid+1) * (mid+1) > x) {
//             return mid;
//         }
//         else if(mid*mid < x) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }
// };

//SECTION 2: ARRAY
//Question 1: check if an element exist in an array
//Solution 1:
// const findElement = function (arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === target) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

// console.log(findElement([1, 2, 3, 6, 7, 8, 0], 9));

//Solution 2:
// const array = [3, "hello"];
// const findElement2 = function (arr, target) {
// 	return arr.includes(target);
// };
// console.log(findElement2(array, 5));

//Question 2: check if an element exist in an array and return it index
//Solution 1:
// const findElement = function (arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === target) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };

//Solution 2:
// const array = [3, "hello"];
// const findElement = function (arr, target) {
// 	return arr.indexOf(target);
// };
// console.log(findElement(array, "hela"));

//Question 3: Different between slice and splice
// slice returns a piece of the array but it doesn't affect the original array.
//splice changes the original array by removing, replacing, or adding values and returns the affected values.

// let array1 = [
// 	"apple",
// 	"john",
// 	true,
// 	2,
// 	5,
// 	45,
// 	7,
// 	8,
// 	{ location: "nenwa strret", state: "Abuja" },
// ];

// let subArray = array1.slice(1, 4);
// console.log(subArray);
// array1.splice(1, 0, "Esther", "Mary");
// console.log(array1);

//Question 4: Shallow copy vs Deep copy an array

//Shollow copy
// let array = ["apple", "john", true, 2, 5, 45];

// let array2 = array;
// array2.pop();
// console.log(array, array2);

//Deep copy
// let array = ["apple", "john", true, 2, 5, 45];
// let array2 = [...array];
//let array3 = Array.from(array);
//let array4 = array.concat();
// array4.pop();
// console.log(array4, array);

//Question 5: how to merge two array
// let array1 = ["Apple", "Banana", "Orange"];
// let array2 = [19, 2, 4, 5];
// let combineArray = [...array1, ...array2];
// let combineArray2 = array2.concat(array1);
// console.log(combineArray2);

//Question 6: How to check if two array are equal

// let arr1 = [1, 3, 4];
// let arr2 = [1, 3, 4];
//SOLUTION 1:
// let isEqual = function (arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] !== arr2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// console.log(isEqual(arr1, arr2));
//SOLUTION 2:
// let isEqual = function (arr1, arr2) {
// 	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
// };
// console.log(isEqual(arr1, arr2));

// Question: Getting the Max Number
// let number = [1, 4, 5, 10, 7];

// function maxNum(arr) {
// 	max = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }
// console.log(maxNum(number));

//SOLUTION 1 : TWO SUM
// var twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// };

// console.log(twoSum([2, 7, 11, 15], 9));

//SOLUTION 2: TWO SUM
// function twoSum(nums, target) {
// 	const map = new Map();

// 	for (let i = 0; i < nums.length; i++) {
// 		const data = target - nums[i];

// 		if (map.has(data)) {
// 			return [map.get(data), i];
// 		}
// 		map.set(nums[i], i);
// 	}
// }
// console.log(twoSum([2, 7, 11, 15], 9));

//SOLUTION 1: MAJORITY ELEMENT
// function majorityElement(nums) {
// 	nums.sort((a, b) => a - b);
// 	return nums[Math.floor(nums.length / 2)];
// }

// console.log(majorityElement([2, 3, 2, 2, 1, 3]));

//SOLUTION 2: MAJORITY ELEMENT
// var majorityElement = function (nums) {
// 	let map = {};
// 	let n = nums.length;

// 	for (let i of nums) {
// 		if (!map[i]) {
// 			map[i] = 1;
// 		} else {
// 			map[i]++;
// 		}
// 		if (map[i] >= n / 2) return i;
// 	}
// 	console.log(map);
// };
// console.log(majorityElement([2, 3, 2, 2, 1, 3]));

//SOLUTION 1: Squares of a Sorted Array
let sortedSquares = function (nums) {
	Math.abs(nums);
	const newArray = nums.map((num) => {
		return num * num;
	});
	return newArray.sort((a, b) => a - b);
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));

//Profill Array

// Array.prototype.myMap = function (callback) {
// 	let array = [];
// 	for (let i = 0; i < this.length; i++) {
// 		array.push(callback(this[i], i, this));
// 	}
// 	return array;
// };
