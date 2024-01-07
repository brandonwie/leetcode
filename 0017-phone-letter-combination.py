class Solution(object):

    def dfs(self, digits, index, path, res, letter_map):
        if (index == len(digits)):
            res.append(path)
            return
        for l in letter_map[digits[index]]:
            self.dfs(digits, index + 1, path + l, res, letter_map)

    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        # letter map using list and dictionary
        letter_map =   {
                        '2': ['a','b','c'],
                        '3': ['d','e','f'],
                        '4': ['g','h','i'],
                        '5': ['j','k','l'],
                        '6': ['m','n','o'],
                        '7': ['p','q','r','s'],
                        '8': ['t','u','v'],
                        '9': ['w','x','y','z']
                        }
        # if digits is empty return empty list
        if len(digits) == 0:
            return []
        res = []
        self.dfs(digits, 0, "", res, letter_map)
        return res
