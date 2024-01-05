# Solve LeetCode problems (JS/TS/Python/C++)

[![en](https://img.shields.io/badge/lang-EN-red.svg)](https://github.com/brandonwie/leetcode/blob/main/README.md)
[![한국어](https://img.shields.io/badge/lang-한국어-green.svg)](https://github.com/brandonwie/leetcode/blob/main/README.ko-kr.md)

## [1. Two Sum (easy)](https://github.com/brandonwie/leetcode/blob/main/0001-two-sum.js)

the fastest solutions and the popular ones are using Objects(HashMap style in Java) and one for-loop

## [2. Add Two Numbers (medium)](https://github.com/brandonwie/leetcode/blob/main/0002-add-two-numbers.js)

It was helpful to understand the question with knowing the ListNode in Java.

Using less functions will help to decrease the time it takes.

## [3. Longest Substring Without Repeating Characters (medium)](https://github.com/brandonwie/leetcode/blob/main/0003-longest-substring.js)

Using `Set` was my solution, but the fastest solution using an array and slice method was brilliant.

## [4. Median of Two Sorted arrays (hard)](https://github.com/brandonwie/leetcode/blob/main/0004-median-of-two-sorted-arrays.js)

took 3 days to fully understand (still need more time to understand in a firm way)
(update 01/01/2022)

## [6. Zigzag Conversion (medium)](https://github.com/brandonwie/leetcode/blob/main/0006-zigzag-conversion.ts)

- more dislikes than likes : I wonder why 🤷🏻‍♂️... not for real use-cases?
- this problem was tricky because I had to draw the zigzag with given strings to find patterns (well frankly, I got the answer from [YouTube](https://www.youtube.com/watch?v=Q2Tw6gcVEwc&t=456s&ab_channel=NeetCode))
- **ZIG line**(which contains letters in all rows - \*last row might not have letters for all rows)
  - distance to the next letter in the ZIG line: `increment = 2 * (numRows - 1)`
  - for instance, with 4 numRows, to reach the next ZIG line char, it takes 6 moves (draw it if you want the proof)
- **ZAG line** (where the each letter head to the first row diagonally)
  - check if ZAG line char is inbound
  - after adding ZIG line char, if the current row is not the first or the last row, and inbound
  - `i + increment - (2 * row)`: go back `2 * row` from the next ZIG line char to get to the ZAG lien char
- You'll get the idea if you actually draw a zigzag pattern that has 4 rows using a random string (at least with 13-15 chars)

### important things

- Use smaller array (if exists) to move pointers less
- Concept of left/right pointers on smaller array (left pointer only move to the right and vice-versa)
- Using `-Infinity` nad `Infinity` to indicate there's no more space for pointers to move
- How to setup mid point matters for the entire code due to indices (e.g. use length or length -1)
- Think about the locations of pointers before and after moving while setting up the pointers using mid positions

The fastest solution is almost the same as my solution, but I don't know why it runs way slower than the one.

`Array.sort((a,b)=>a-b)` was kind of a key to this solution because `sort()` doesn't apply to negative numbers by itself.

Another solution is to implement `sort()` with a custom function.

## [7. Reverse Integer (medium)](https://github.com/brandonwie/leetcode/blob/main/0007-reverse-integer.js)

- convert to string
- separate '-' if any exists and save it as prefix
- do reversed for loop and concat each digits
- remove zeros if any exists until it doesn't appear
- concat with the prefix
- convert to number

## [8. String to Integer (medium)](https://github.com/brandonwie/leetcode/blob/main/0008-string-to-integer.js)

JS file runs way faster then the TS one due to (probably) the unnecessary loops and conditionals; However, I left as it is (didn't amend it) to see my thought progress later in the future, one interesting thing is that actually later I could think of a better algorithm to solve it, and it went from 11% up to 80% faster runtime.

- trim input string
- check if one of the signs (+, -) exists, assign it separately
- loop and concat numbers including '0'
  - 0 has to be handled separately while using `Boolean` and `Number` together, because 0 will throw false with Boolean causing unexpected behavior
- if the number part is an empty string (= no number following), return 0
- `Number(-000024)` for instance, will return `-24`. Therefore, there's no need to remove those front zeros before concatenate with signs if one exists, because `Number` function will automatically remove it for you
- basic condition checks are not mentioned here

## [9. Palindrome Number (easy)](https://github.com/brandonwie/leetcode/blob/main/0009-palindrome-number.js)

1. solving with string: need two pointers from the start and the end of the string, and compare each char until they meet in the middle (O(n) time complexity)
1. solving with number `x`:
   1. set the divider as 1, multiply by 10 while it's smaller or equal to the number's digit'
   2. get the left most digit by dividing the number by the divider
   3. get the right most digit by getting the remainder of the number divided by 10
   4. compare those two digits, if not equal, return `false`
   5. remove the two digits you've used by getting the remainder of the number divided by the divider, and divide the remainder by 10 and round it down
   6. `x` will be 0 at the end, exit the loop, return `true`
   7. the time complexity is the same as the string solution, O(n)

---

## Following the Leetcode Patterns' order

> [leetcode-patterns](https://seanprashad.com/leetcode-patterns/)

## [217. Contains Duplicate (easy)](https://github.com/brandonwie/leetcode/blob/main/leetcode-patterns/001-0217-contains-duplicate.js)

### How to find duplicates

- use a `Set` to store the values
- if the value already exists in the `Set`, return `true`
- otherwise add to the `Set`
- return `false` if the loop ends

> `.has` and `.add` are O(1) on average, so they don't change the overall linear complexity.

## [268. Missing Number (easy)](https://github.com/brandonwie/leetcode/blob/main/leetcode-patterns/002-0268-missing-number.js)

- use `Gauss sum formula` $\frac{n(n+1)}{2}$
- compare with current sum of the array

## [448. Find All Numbers Disappeared in an Array (easy)](https://github.com/brandonwie/leetcode/blob/main/leetcode-patterns/003-0448-find-all-numbers-disappeared-in-an-array.js)

- loop through the array and use number elements to mark the matching indices as negative
- loop once again and find the positive number, and push the index + 1 to the result array

## [136. Single Number (easy)](https://github.com/brandonwie/leetcode/blob/main/leetcode-patterns/004-0136-single-number.js)

- use `XOR` operator
- or just substract the numbers in `nums` from current index (comparing the sums of the two different arrays, `nums` and `[0, n]`)
