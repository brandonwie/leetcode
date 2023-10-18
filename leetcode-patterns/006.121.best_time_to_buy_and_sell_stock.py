class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # use adjacent two pointers
        # move right pointer only
        # if left pointer is greater than the right pointer, move the left pointer to the right pointers position
        l, r, maxP = 0, 1, 0
        while (r < len(prices)):
            profit = prices[r] - prices[l]
            if (profit > 0):
                # compare and update maxP
                maxP = max(maxP, profit)
            else:
                l = r
            r += 1
        return maxP