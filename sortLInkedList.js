/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // already sorted
  if (head === null || head.next === null) return head;

  let temp = head;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  temp.next = null;

  let l1 = sortList(head);
  let l2 = sortList(slow);

  return merge(l1, l2);
};

function merge(l1, l2) {
  let temp = new ListNode(0);
  let curr = temp;

  while (l1 !== null && l2 !== null) {
    // set smaller one for curr node
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  // edge cases
  if (l1 !== null) {
    curr.next = l1;
    l1 = l1.next;
  }

  if (l2 !== null) {
    curr.next = l2;
    l2 = l2.next;
  }

  return temp.next;
}

dates = [
  0120, 0121, 0127, 0128, 0203, 0217, 0218, 0222, 0224, 0225, 0228, 0229, 0301,
  0310, 0313, 0314, 0316, 0323, 0324, 0330, 0331, 0403, 0406, 0407, 0410, 0411,
  0412, 0413, 0414, 0415, 0419, 0420, 0421, 0427, 0428, 0429, 0430, 0501, 0504,
  0505,
];
// 04 14/15/19/20/21/27/28/29/30
// 05 1/4/5/6/7/8
