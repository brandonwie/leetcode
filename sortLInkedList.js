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

let date = ['0620'];
