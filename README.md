# One LeetCode problem A Day (JavaScript)

## #1. Two Sum

the fastest solutions and the popular ones are using Objects(HashMap style in Java) and one for-loop

```

```

## #2. Add Two Numbers

It was helpful to understand the question with knowing the ListNode in Java.<br>
Using less functions will help to decrease the time it takes.

## #3. Longest Substring Without Repeating Characters (12/29/2021)

Using `Set` was my solution, but the fastest solution using an array and slice method was brilliant.

## #4. [HARD] Median of Two Sorted arrays (12/30/2021)

took 3 days to fully understand (still need more time to understand in a firm way)
(update 01/01/2022)

<br />

## #6. Zigzag Converstion

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
<br />
`Array.sort((a,b)=>a-b)` was kind of a key to this solution because `sort()` doesn't apply to negative numbers by itself.
<br />
Another solution is to implement `sort()` with a custom function.

## #7. Reverse Integer

- convert to string
- separate '-' if any exists and save it as prefix
- do reversed for loop and concat each digits
- remove zeros if any exists until it doesn't appear
- concat with the prefix
- convert to number

## #8. String to Integer

JS file runs way faster then the TS one due to (probably) the unnecessary loops and conditionals; However, I left as it is (didn't amend it) to see my thought progress later in the future, one interesting thing is that actually later I could think of a better algorithm to solve it, and it went from 11% up to 80% faster runtime.

- trim input string
- check if one of the signs (+, -) exists, assign it separately
- loop and concat numbers including '0'
  - 0 has to be handled separately while using `Boolean` and `Number` together, because 0 will throw false with Boolean causing unexpected behavior
- if the number part is an empty string (= no number following), return 0
- `Number(-000024)` for instance, will return `-24`. Therefore, there's no need to remove those front zeros before concatenate with signs if one exists, because `Number` function will automatically remove it for you
- basic condition checks are not mentioned here

## #9. Palindrome Number
