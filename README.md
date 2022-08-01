# One LeetCode problem A Day (JavaScript)

## Disclaimer

- Not sure if I can keep "two LeetCode problems per week", but I will do my best.
- This repo will not only contain my solutions, but also solutions that meet my preferences, or those are recorded as the fastest on LeetCode.
- Hence, not all solutions are mine, and I will leave comments if it's not solely mine.
- `README.md` wil be written in 'lastest to earliest' order

### #7. Reverse Integer

- convert to string
- separate '-' if any exists and save it as prefix
- do reversed for loop and concat each digits
- remove zeros if any exists until it doesn't appear
- concat with the prefix
- convert to number

### #6. Zigzag Converstion

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

### TODO notes for longest palindrome question

### #4. [HARD] Median of Two Sorted arrays (12/30/2021)

took 3 days to fully understand (still need more time to understand in a firm way)
(update 01/01/2022)<br>

#### important things

- Use smaller array (if exists) to move pointers less
- Concept of left/right pointers on smaller array (left pointer only move to the right and vice-versa)
- Using `-Infinity` nad `Infinity` to indicate there's no more space for pointers to move
- How to setup mid point matters for the entire code due to indices (e.g. use length or length -1)
- Think about the locations of pointers before and after moving while setting up the pointers using mid positions

The fastest solution is almost the same as my solution, but I don't know why it runs way slower than the one.<br>
`Array.sort((a,b)=>a-b)` was kind of a key to this solution because `sort()` doesn't apply to negative numbers by itself.<br>
Another solution is to implement `sort()` with a custom function.

### #3. Longest Substring Without Repeating Characters (12/29/2021)

Using `Set` was my solution, but the fastest solution using an array and slice method was brilliant.

### #2. Add Two Numbers

It was helpful to understand the question with knowing the ListNode in Java.<br>
Using less functions will help to decrease the time it takes.

### #1. Two Sum

the fastest solutions and the popular ones are using Objects(HashMap style in Java) and one for-loop

```

```
