# array hash_table
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, n in enumerate(nums):
           diff = target - n
           if diff in seen:
               return [seen.get(diff), i]
           seen[n] = i
        return