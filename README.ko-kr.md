# Google 가는 그 날까지 Leetcode 열심히 풀기 (JS/TS/Python/C++)

[![en](https://img.shields.io/badge/lang-EN-red.svg)](https://github.com/brandonwie/leetcode/blob/main/README.md)
[![한국어](https://img.shields.io/badge/lang-한국어-green.svg)](https://github.com/brandonwie/leetcode/blob/main/README.ko-kr.md)

## [1. Two Sum (easy)](https://github.com/brandonwie/leetcode/blob/main/001__two-sum.js)

가장 빠른 해결책과 인기 있는 것들은 Java의 HashMap 스타일로 Objects와 한 번의 for-loop를 사용합니다.

## [2. Add Two Numbers (medium)](https://github.com/brandonwie/leetcode/blob/main/002__add-two-numbers.js)

Java의 ListNode를 알고 있으면 문제를 이해하는 데 도움이 됩니다.
함수의 사용을 줄이면 실행 시간이 단축됩니다.

## [3. Longest Substring Without Repeating Characters (medium)](https://github.com/brandonwie/leetcode/blob/main/003__longest-substring.js)

`Set`을 사용해 해결했지만, array의 slice방법을 사용하는 가장 빠른 해결책을 배웠어요.

## [4. Median of Two Sorted arrays (hard)](https://github.com/brandonwie/leetcode/blob/main/004__median-of-two-sorted-arrays.js)

완전히 이해하는 데 3일이 걸렸습니다. (아직 확고하게 이해하기 위해 더 많은 시간이 필요합니다)

## [6. Zigzag Conversion (medium)](https://github.com/brandonwie/leetcode/blob/main/006__zigzag-conversion.ts)

- 싫어요가 좋아요보다 많습니다 : 실제 사용 사례가 아닌 것 같아요 🤷🏻‍♂️
- 이 문제는 주어진 문자열로 지그재그를 그려 패턴을 찾는 것이 까다로웠습니다. (솔직히, [YouTube](https://www.youtube.com/watch?v=Q2Tw6gcVEwc&t=456s&ab_channel=NeetCode)에서 답을 얻었습니다.)
- **ZIG 라인**(모든 행에 글자 포함 - \*마지막 행은 모든 행에 글자가 없을 수 있음)
  - ZIG 라인의 다음 글자까지의 거리: `increment = 2 * (numRows - 1)`
  - 예를 들어, 4개의 numRows로, 다음 ZIG 라인 문자에 도달하려면 6번의 움직임이 필요합니다. (증명을 원하면 그려보세요)
- **ZAG 라인** (각 글자가 첫 번째 행으로 대각선으로 이동하는 곳)
  - ZAG 라인 문자가 범위 내에 있는지 확인합니다.
  - ZIG 라인 문자를 추가한 후, 현재 행이 첫 번째 또는 마지막 행이 아니고 범위 내에 있으면,
  - `i + increment - (2 * row)`: 다음 ZIG 라인 문자로부터 `2 * row`를 빼서 ZAG 라인 문자를 얻습니다.
- 실제로 무작위 문자열을 사용하여 4개의 행이 있는 지그재그 패턴을 그리면 이해할 수 있습니다 (최소 13-15 문자 필요).

### 중요한 점들

- 포인터를 덜 움직이기 위해 가능하면 작은 배열 사용
- 작은 배열에서의 왼쪽/오른쪽 포인터 개념 (왼쪽 포인터는 오른쪽으로만 움직이고 그 반대도 마찬가지)
- 포인터를 더 이상 움직일 공간이 없다는 것을 나타내기 위해 `-Infinity`와 `Infinity` 사용
- 인덱스 때문에 전체 코드에 중간 지점 설정 방법이 중요 (예: 길이 사용 또는 길이 -1 사용)
- 중간 위치를 사용하여 포인터를 설정할 때 움직이기 전과 후의 포인터 위치에 대해 생각합니다.

가장 빠른 해결 방법은 거의 내 해결 방법과 같지만, 왜 그것보다 훨씬 느리게 실행되는지 모르겠습니다.

`Array.sort((a,b)=>a-b)`는 이 해결 방법의 핵심이었습니다. 왜냐하면 `sort()`는 자체적으로 음수에 적용되지 않기 때문입니다.

다른 해결책은 사용자 정의 함수로 `sort()`를 구현하는 것입니다.

## [7. Reverse Integer (medium)](https://github.com/brandonwie/leetcode/blob/main/007__reverse-integer.js)

- 문자열로 변환
- '-'가 있으면 분리하고 접두사로 저장
- 역순 for 루프를 수행하고 각 숫자를 연결
- 나타나는 한 0 제거
- 접두사와 연결
- 숫자로 변환

## [8. String to Integer (medium)](https://github.com/brandonwie/leetcode/blob/main/008__string-to-integer.js)

JS 파일은 TS 파일보다 훨씬 빠르게 실행됩니다 (아마도 불필요한 루프와 조건문 때문일 것입니다); 그러나 나중에 내 생각의 진행을 보기 위해 그대로 두었습니다. 실제로 나중에 더 나은 알고리즘을 생각해냈고, 실행 시간이 11%에서 80% 더 빨라졌습니다.

- 입력 문자열 정리
- 기호 (+, -) 중 하나가 있는지 확인하고 별도로 할당
- 루프를 돌며 '0'을 포함한 숫자를 연결
  - `Boolean`과 `Number`를 함께 사용할 때 0은 따로 처리해야 합니다. 왜냐하면 0은 Boolean으로 false를 반환하여 예기치 않은 동작을 유발할 수 있기 때문입니다.
- 숫자 부분이 빈 문자열인 경우 (= 뒤에 숫자가 없으면), 0 반환
- 예를 들어, `Number(-000024)`는 `-24`를 반환합니다. 따라서, 실제로 부호와 연결하기 전에 앞에 있는 0을 제거할 필요가 없습니다. 왜냐하면 `Number` 함수가 자동으로 제거해주기 때문입니다.
- 여기에 언급되지 않은 기본 조건 확인이 있습니다.

## [9. Palindrome Number (easy)](https://github.com/brandonwie/leetcode/blob/main/009__palindrome-number.js)

1. 문자열로 해결: 시작과 문자열의 끝에서 두 포인터가 필요하며, 중앙에서 만날 때까지 각 문자를 비교합니다 (시간 복잡도 O(n))
1. 숫자 `x`에 대한 문제풀이:
   1. 나누기 값으로 1을 설정하고, 숫자의 자릿수가 동일하거나 작을 때까지 10을 곱합니다.
   2. 나누기 값으로 숫자를 나누어 가장 왼쪽 자릿수를 얻습니다.
   3. 숫자를 10으로 나눈 나머지로 가장 오른쪽 자릿수를 얻습니다.
   4. 두 자릿수를 비교하고, 같지 않으면 `false`를 반환합니다.
   5. 사용한 두 자릿수를 제거하기 위해 나누기 값으로 숫자를 나눈 나머지를 얻고, 나머지를 10으로 나눈 후 내림하여 나눕니다.
   6. `x`는 마지막에 0이 될 것이며, 루프를 종료하고 `true`를 반환합니다.
   7. 시간 복잡도는 문자열 해결방식과 동일하게 O(n)입니다.
