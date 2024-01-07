from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) # mapping charCount to list of Anagrams, SC O(N)

        for s in strs: # TC O(N)
            count = [0] * 26 # a...z
            for c in s: # TC O(M)
                count[ord(c) - ord('a')] += 1
            res[tuple(count)].append(s) # creating tuple: SC O(1)
            print(res.values())
        return res.values() # returns list of values in the dictionary

# total of O(N*M) TC and O(n) SC, 대략 TC,SC = O(n)

def main():
    solution = Solution()
    solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"])

if __name__ == "__main__":
    main()