
function Node(val)
{
  this.val = val;
  this.next = null;
}

  
function middleNode(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = null;
  return slow;
}

const root = new Node(2);
const n1 = new Node(3);
const n2 = new Node(4);
const n3 = new Node(5);
const n4 = new Node(6);
const n5 = new Node(7);
root.next = n1;
n1.next = n2;
n2.next =n3;
n3.next = n4;
n4.next = n5;
n5.next = null;
console.log(root);
console.log("middle node", middleNode(root));




















//example 2
var current = head;
var length = 0;
var middle = head;

while (current.next != null) {
    length++;
    if (length % 2 == 0) {
        middle = middle.next;
    }
    current = current.next;
}
console.log(middle);