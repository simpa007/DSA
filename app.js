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
//SOLUTION 2:
// const maxNum = number.reduce((max, number) => {
// 	return number > max ? number : max;
// });

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

//SOLUTION 1: REMOVE DUPLICATES FROM SORTED ARRAY

// function removeDuplicate(nums) {
// 	if (nums.length === 0) {
// 		return 0;
// 	}
// 	let index = 1;
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		if (nums[i] !== nums[i + 1]) {
// 			nums[index] = nums[i + 1];
// 			index++;
// 		}
// 	}
// 	return index;
// }

// console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//output = [0,1,2,3,4,-,-,-,-,-];

//SOLUTION 1: Squares of a Sorted Array
// let sortedSquares = function (nums) {
// 	const newArray = nums.map((num) => {
// 		return num * num;
// 	});
// 	return newArray.sort((a, b) => a - b);
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

//SOLUTION 2: Squares of a Sorted Array
// let sortedSquares = function (nums) {
// 	let result = new Array(nums.length).fill(0);
// 	let left = 0;
// 	let right = nums.length - 1;
// 	let index = nums.length - 1;
// 	while (left < right) {
// 		let leftVal = Math.pow(nums[left], 2);
// 		let rightVal = Math.pow(nums[right], 2);
// 		if (leftVal < rightVal) {
// 			result[index] = rightVal;
// 			right--;
// 		} else {
// 			result[index] = leftVal;
// 			left++;
// 		}
// 		index--;
// 	}
// 	return result;
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

//SOLUTION 1: FIND PIVOT INDEX
// var pivotIndex = function (nums) {
// 	const sum = nums.reduce((acc, current) => (acc += current), 0);
// 	let left = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		let item = nums[i];
// 		let right = sum - item - left;
// 		if (left === right) return i;
// 		else {
// 			left += item;
// 		}
// 	}
// 	return -1;
// };
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

//SOLUTION 1: MOVE ZEROS
// var moveZeroes = function (nums) {
// 	let size = nums.length;
// 	for (let i = 0; i < size; i++) {
// 		if (nums[i] === 0) {
// 			nums.splice(i, 1);
// 			nums.push(0);
// 			i--;
// 			size--;
// 		}
// 	}
// 	return nums;
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]));

//SOLUTION 2: MOVE ZEROS
// var moveZeroes = (nums) => {
// 	const arr = new Array(nums.length).fill(0);
// 	let [left, right] = [0, 0];
// 	while (right < nums.length) {
// 		const isZero = nums[right] === 0;
// 		if (!isZero) {
// 			arr[left] = nums[right];
// 			left++;
// 		}
// 		right++;
// 	}
// 	return arr;
// };

// console.log(moveZeroes([0, 3, 0, 12, 0]));

//SOLUTION 1: REMOVE ELEMENT
// var removeElement = function (nums, val) {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === val) {
// 			nums.splice(i, 1);
// 			i--;
// 		}
// 	}
// 	return nums.length;
// };
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

//  SOLUTION 1: MAX CONSECUTIVE ONES

// let findMaxConsecutiveOnes = function (nums) {
// 	let current = 0;
// 	let max = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		current = nums[i] === 0 ? 0 : current + 1;
// 		max = current > max ? current : max;
// 	}
// 	return max;
// };
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

//SECTION 2: MAP, FILTER AND REDUCE

//MAP
// const employees = [
// 	{ name: "John", age: 32 },
// 	{ name: "Sarah", age: 28 },
// 	{ name: "Michael", age: 40 },
// ];

// const names = employees.map(({ name }) => name);
// console.log(names);

//Polyfill Array
// Array.prototype.myMap = function (callback) {
// 	let array = [];
// 	for (let i = 0; i < this.length; i++) {
// 		array.push(callback(this[i], i, this));
// 	}
// 	return array;
// };

//FILTER
// const products = [
// 	{ name: "iPhone", price: 999, inStock: true },
// 	{ name: "Samsung Galaxy", price: 899, inStock: false },
// 	{ name: "Google Pixel", price: 799, inStock: true },
// ];

// let inStock = products.filter((product) => product.inStock);

// console.log(inStock);

//Polyfill Filter

// Array.prototype.myFilter = function (callback) {
// 	let result = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if (callback(this[i], i, this)) {
// 			result.push(this[i]);
// 		}
// 	}
// 	return result;
// };

//Reduce
// const orders = [
// 	{ product: "iPhone", price: 999, quantity: 2 },
// 	{ product: "Samsung Galaxy", price: 899, quantity: 1 },
// 	{ product: "Google Pixel", price: 799, quantity: 3 },
// ];

// const totalAmount = orders.reduce((acc, order) => {
// 	return acc + order.price * order.quantity;
// }, 0);
// console.log(totalAmount);

//Polyfill of reduce()
// if (!Array.prototype.myFilter) {
//     Array.prototype.myReduce = (callback, initialValue) => {
//         let accumulator = initialValue === undefined ? this[0] : initialValue;
//         for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
//             accumulator = callback(accumulator, this[i], i, this);
//         }
//         return accumulator;
//     };
// }

//SOLUTION 1: FIND THE LONGEST WORD LENGTH
// const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

// let wordCount = words.reduce(function (maxLength, word) {
// 	const currentLength = word.length;
// 	return currentLength > maxLength ? currentLength : maxLength;
// }, 0);
// console.log(wordCount);

//SOLUTION 1: FIND THE LONGEST WORD
// const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

// const longestWord = words.reduce((longestWord, word) => {
// 	return word.length > longestWord.length ? word : longestWord;
// }, "");

// console.log(longestWord);

//Question 4: Calculate the average score of students who scored above 90
// const students = [
// 	{ name: "John", score: 85 },
// 	{ name: "Sarah", score: 92 },
// 	{ name: "Michael", score: 88 },
// 	{ name: "Emma", score: 95 },
// 	{ name: "Daniel", score: 90 },
// ];

// const studentScore = students
// 	.filter((student) => student.score > 90)
// 	.reduce((acc, current) => acc + current.score / 2, 0);
// console.log(studentScore);

//Question 5: Filter out books published before the year 2000 and return their titles
// const books = [
// 	{ title: "Book 1", year: 1998 },
// 	{ title: "Book 2", year: 2003 },
// 	{ title: "Book 3", year: 1995 },
// 	{ title: "Book 4", year: 2001 },
// ];
// const bookFilter = books
// 	.filter((book) => book.year > 2000)
// 	.map((book) => book.title);
// console.log(bookFilter);

//Question 6: Capitalize the first letter of each word in the array
// const strings = ["hello world", "i am openai", "welcome to javascript"];
// function capitalizeWords(arr) {
// 	return arr.map((word) => {
// 		const firstLetter = word.charAt(0).toUpperCase();
// 		const rest = word.slice(1).toLowerCase();
// 		return firstLetter + rest;
// 	});
// }

// console.log(capitalizeWords(strings));

//Question 7: Calculate the factorial of the largest number in the array
// const numbers = [5, 2, 8, 4, 3];

// const largestFactorial = numbers.reduce((largest, num) => {
// 	const currentFactorial = Array.from({ length: num })
// 		.map((_, i) => i + 1)
// 		.reduce((fact, val) => fact * val, 1);

// 	return currentFactorial > largest ? currentFactorial : largest;
// }, 1);

// console.log(largestFactorial); // Output: 40320 (8!)

//SECTION 3:STRING

// SOLUTION 1:  Find the Index of the First Occurrence in a String

// var strStr = function (haystack, needle) {
// 	let index = 0, //position
// 		j = 0, //needle
// 		k = 0; //haystack;
// 	while (index < haystack.length) {
// 		while (needle[j] === haystack[k]) {
// 			j++;
// 			k++;
// 			if (j === needle.length) return index;
// 			if (k === haystack.length) return -1;
// 		}
// 		if (needle[j] !== haystack[k]) {
// 			index++;
// 			k = index;
// 			j = 0;
// 		}
// 	}
// 	return -1;
// };

// console.log(strStr("sadbutsad", "sad"));
//SOLUTION 2: Find the Index of the First Occurrence in a String
// var strStr = function (haystack, needle) {
// 	for (let i = 0; i <= haystack.length - needle.length; i++) {
// 		let str = "";
// 		for (let j = i; j < i + needle.length; j++) {
// 			str += haystack[j];
// 		}
// 		if (str == needle) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };
// console.log(strStr("sadbutsad", "sad"));

//SOLUTION 1: REVERSE A STRING
// var reverseString = function (s) {
// 	return s.reverse();
// };

// console.log(reverseString(["h", "e", "l", "l", "o"]));

//SOLUTION 1: REVERSE A STRING
// var reverseString = function (s) {
// 	let left = 0;
// 	let right = s.length - 1;

// 	while (left <= right) {
// 		[s[left], s[right]] = [s[right], s[left]];
// 		left++;
// 		right--;
// 	}
// 	return s;
// };

// console.log(reverseString(["h", "e", "l", "l", "o"]));

//SOLUTION 1: VALID ANAGRAM
//An Anagram is a word or phrase formed by rearranging the letters of a different
//word or phrase, typically using all the original letters exactly once.

// var isAnagram = function (s, t) {
// 	s = s.split("").sort().join("");
// 	t = t.split("").sort().join("");
// 	return s === t;
// };

// console.log(isAnagram("anagram", "nagaram"));

//SOLUTION 2: VALID ANAGRAM
// var isAnagram = function (s, t) {
// 	if (s.length === t.lenth) {
// 		return false;
// 	}
// 	let obj = {};
// 	for (let char of s) {
// 		if (!obj[char]) {
// 			obj[char] = 1;
// 		} else {
// 			obj[char]++;
// 		}
// 	}
// 	for (let char of t) {
// 		if (obj[char]) {
// 			obj[char]--;
// 		} else {
// 			return false;
// 		}
// 	}
// 	for (let char in obj) {
// 		if (obj[char] === 0) return true;
// 		else {
// 			return false;
// 		}
// 	}
// };

// console.log(isAnagram("anagram", "nagaram"));

//SOLUTION 1: LONGEST COMMON PREFIX
// var longestCommonPrefix = function (strs) {
// 	let prefix = strs[0];
// 	for (let i = 1; i < strs.length; i++) {
// 		while (strs[i].indexOf(prefix) !== 0) {
// 			prefix = prefix.substring(0, prefix.length - 1);
// 		}
// 	}
// 	return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

//SOLUTION 1 : Merge Strings Alternately

// let mergeAlternately = function (word1, word2) {
// 	let result = "";
// 	let maxLength = Math.max(word1.length, word2.length);
// 	for (let i = 0; i < maxLength; i++) {
// 		if (i < word1.length) result += word1[i];
// 		if (i < word2.length) result += word2[i];
// 	}
// 	return result;
// };

// console.log(mergeAlternately("abcd", "pq"));

//SOLUTION 1: LENGTH OF LAST WORD
// var lengthOfLastWord = function (s) {
// 	let newStr = s.trim().split(" ");
// 	return newStr[newStr.length - 1].length;
// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "));

//SOLUTION 2: LENGTH OF LAST WORD
// var lengthOfLastWord = function (s) {
// 	let trimmedString = s.trim();

// 	return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
// };

// console.log(lengthOfLastWord("Hello World"));

//SOLUTION 1 :  Valid Palindrome
// var isPalindrome = function (s) {
// 	let strLower = s.toLowerCase().replace(/[^A-Z0-9]/gi, "");

// 	let left = 0;
// 	let right = strLower.length - 1;
// 	while (left < right) {
// 		if (strLower[left] !== strLower[right]) {
// 			return false;
// 		}
// 		left++;
// 		right--;
// 	}
// 	return true;
// };
// console.log(isPalindrome("race a car"));

//SOULTION 1: STRING COMPRESSION

// let compress = function (chars) {
// 	let i = 0,
// 		len = 0;

// 	while (i < chars.length) {
// 		let currChar = chars[i];
// 		chars[len++] = currChar;

// 		let count = 0;
// 		while (i < chars.length && currChar == chars[i]) {
// 			count++;
// 			i++;
// 		}
// 		if (count > 1) {
// 			count = count.toString().split("");
// 			for (let c of count) {
// 				chars[len++] = c;
// 			}
// 		}
// 	}
// 	return len;
// };
// console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));

//SOLUTION 2 : NOT CORRECT

// var compress = function (chars) {
// 	let obj = {};
// 	for (let s of chars) {
// 		if (!obj[s]) {
// 			obj[s] = 1;
// 		} else {
// 			obj[s]++;
// 		}
// 	}
// 	let value = Object.entries(obj).flat();
// 	let array = [];
// 	for (let i = 0; i < value.length; i++) {
// 		array.push(value[i].toString());
// 	}
// 	return array;
// };
// console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));

//SOLUTION 1 : REVERSE WORDS IN A STRING : NOT WORKING
// var reverseWords = function (s) {
// 	return s.trim().split(/\s+/).reverse().join(" ");
// };
// console.log(reverseWords(" the  sky is blue"));

//SOLUTION 2: REVERSE WORDS IN A STRING
// let reverseWords = function (s) {
// 	let arr = s.split(" ");
// 	let reverse = "";
// 	for (let i = arr.length - 1; i >= 0; i--) {
// 		if (arr[i] == "") continue;
// 		if (reverse.length > 0) reverse += " ";
// 		reverse += arr[i];
// 	}
// 	return reverse;
// };
// console.log(reverseWords(" the sky is  blue "));

//continue from here

//SOLUTION 1: REVERSE VOWELS OF A STRING
// let reverseVowels = function (s) {
// 	let vowels = "aeiouAEIOU";
// 	let left = 0;
// 	let right = s.length - 1;
// 	let arr = s.split("");
// 	while (left < right) {
// 		while (left < right && !vowels.includes(arr[left])) {
// 			left++;
// 		}
// 		while (left < right && !vowels.includes(arr[right])) {
// 			right--;
// 		}
// 		[arr[left], arr[right]] = [arr[right], arr[left]];
// 		left++;
// 		right--;
// 	}
// 	return arr.join("");
// };

// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leetcode"));

//SOLUTION 1 : ROTATE STRING

//SECTION4: RECURSION

// function fun(n) {
// 	if (n === 0) {
// 		return;
// 	}
// 	console.log("fun", n);
// 	return fun(n - 1);
// }
// console.log(fun(10));

//SOLUTION 1: FACTORIAL OF A NUMBER
//5! = 5*4*3*2*1 =120;

// function factorial(n) {
// 	let sum = 1;
// 	for (let i = 2; i <= n; i++) {
// 		sum = sum * i;
// 	}
// 	return sum;
// }
// console.log(factorial(5));

//SOLUTION 2: FACTORIAL OF A NUMBER

// function factorial(n) {
// 	if (n === 0) {
// 		return 1;
// 	}
// 	return n * factorial(n - 1);
// }
// console.log(factorial(5));

//SOLUTION 1: Sum of Array
// function sumOfArray(nums) {
// 	let sum = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		sum += nums[i];
// 	}
// 	return sum;
// }
// console.log(sumOfArray([2, 3, 4, 5]));

//SOLUTION 2: SUM OF ARRAY

// function sumOfArray(arr) {
// 	if (arr.length === 0) {
// 		return 0;
// 	}
// 	return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1));
// }
// console.log(sumOfArray([2, 3, 4, 5]));

//SOLUTION 3: SUM OF ARRAY

// function sumOfArray(arr) {
// 	if (arr.length === 0) {
// 		return 0;
// 	}
// 	let lastElement = arr.pop();
// 	return lastElement + sumOfArray(arr);
// }
// console.log(sumOfArray([2, 3, 4, 5]));

//SOLUTION 1: FIBONACCI SEQUENCES
//fib(7) : [0,1,1,2,3,5,8,13]

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(7));

//SECTION 5 : SEARCHING IN JAVASCRIPT

//Linear Search in Javascript
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let linearSearch = function (arr, target) {
// 	for (let i = 0; i < arr.length; i++) {    // O(N)
// 		if (arr[i] === target) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };
// console.log(linearSearch(arr, 20));

//Binary Search in Javascript;
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let binarySearch = function (arr, target) {
// 	let start = 0;
// 	let end = arr.length - 1;
// 	while (start <= end) {
// 		let mid = Math.floor((start + end) / 2);
// 		if (arr[mid] === target) {
// 			return mid;
// 		} else if (arr[mid] > target) {
// 			end = mid - 1;
// 		} else {
// 			start = mid + 1;
// 		}
// 	}
// 	return -1;
// };
// console.log(binarySearch(array, 3));

// Binary Search using Recursion

// const BinarySearchRecur = (arr, target) => {
//     return BinarySearchUtil(arr, target, 0, arr.length);
// }

// const BinarySearchUtil = (arr, target, start, end) => {
//     if (start > end)
//         return -1;

//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === target) {
//         return mid;
//     }

//     else if (arr[mid] > target) {
//         return BinarySearchUtil(arr, target, start, mid - 1);
//     }

//     else {
//         return BinarySearchUtil(arr, target, mid + 1, end);
//     }
// }

//SDLUTION 1: Sqrt(x)
// let sqrt = function (x) {
// 	return Math.floor(Math.sqrt(x));
// };
// console.log(sqrt(8));

//SOLUTION 2: Sqrt(x);
// let sqrt = function (x) {
// 	if (x < 2) {
// 		return x;
// 	}
// 	for (let i = 2; i <= x; i++) {
// 		if (i * i === x) return i;
// 		if (i * i > x) return i - 1;
// 	}
// };
// console.log(sqrt(25));

//SOLUTION 1: FIRST BAD VERSION
// var solution = function (isBadVersion) {
// 	/**
// 	 * @param {integer} n Total versions
// 	 * @return {integer} The first bad version
// 	 */
// 	return function (n) {
// 		let start = 1,
// 			end = n;
// 		while (start <= end) {
// 			let mid = Math.floor((start + end) / 2);
// 			if (!isBadVersion(mid)) {
// 				start = mid + 1;
// 			} else {
// 				end = mid - 1;
// 			}
// 		}
// 		return start;
// 	};
// };
// console.log(solution(isBadVersion)(5));

//SOLUTION 1: SEARCH INSERT POSITION
// const arr = [1, 3, 5, 6];
// const searchInsert = function (nums, target) {
// 	let left = 0,
// 		right = nums.length - 1;
// 	while (left <= right) {
// 		let mid = Math.floor((left + right) / 2);
// 		if (nums[mid] === target) return mid;
// 		if (nums[mid] > target) {
// 			right = mid - 1;
// 		} else {
// 			left = mid + 1;
// 		}
// 	}
// 	return left;
// };
// console.log(searchInsert(arr, 2));
//SECTION 6 : OBJECT (HASH MAP)
