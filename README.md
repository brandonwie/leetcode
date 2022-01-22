# One LeetCode problem A Day (JavaScript)

## Disclaimer

- Not sure if I can keep "two LeetCode problems per week", but I will do my best.
- This repo will not only contain my solutions, but also solutions that meet my preferences, or those are recorded as the fastest on LeetCode.
- Hence, not all solutions are mine, and I will leave comments if it's not solely mine.
- `README.md` wil be written in 'lastest to earliest' order

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
