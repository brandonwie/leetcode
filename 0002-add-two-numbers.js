// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/** had help from https://www.youtube.com/channel/UCYPxjfbEI192KWqU67I8c0g/videos
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let carry = 0;
  let previousNode = new ListNode();
  const headNode = previousNode;
  while (l1 || l2 || carry) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;
    console.log(digit);
    const currentNode = new ListNode(digit);
    previousNode.next = currentNode;
    previousNode = currentNode; // new one for next iter.
  }
  return headNode.next;
}
const l1 = new ListNode(2, new ListNode(8, new ListNode(3, null)));
const l2 = new ListNode(3, new ListNode(4, new ListNode(6, null)));
console.log(addTwoNumbers(l1, l2));

/** the fastest solution from LeetCode
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersFastest = function (l1, l2) {
  return addNodeList(l1, l2);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} extra
 * @return {ListNode}
 */
var addNodeList = function (l1, l2, extra = 0) {
  if (l1 === null && l2 === null && extra === 0) {
    return null;
  }

  var n1 = l1 !== null ? l1.val : 0;
  var n2 = l2 !== null ? l2.val : 0;
  var total = n1 + n2 + extra;

  var digit = total % 10;
  var newExtra = (total - digit) / 10;
  var next1 = l1 !== null ? l1.next : null;
  var next2 = l2 !== null ? l2.next : null;

  return new ListNode(digit, addNodeList(next1, next2, newExtra));
};
