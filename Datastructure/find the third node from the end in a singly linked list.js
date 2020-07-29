function Node(val) {
    this.val = val;
    this.next = null;
 }


var removeNthFromEnd = function(head, n) {
 var arr = [];

 while (head) {
   arr.push(new Node(head.val));
   head = head.next;
 }

 arr.splice(-n, 1);

 for (var i = 0, len = arr.length; i < len - 1; i++)
   arr[i].next = arr[i + 1];
 
 return arr.length === 0 ? null : arr[0];
}
const root = new Node(2);
const n1 = new Node(4);
const n2 = new Node(4);
const n3 = new Node(6);
const n4 = new Node(6);
const n5 = new Node(7);

root.next = n1;
n1.next = n2;
n2.next =n3;
n3.next = n4;
n4.next = n5;
n5.next = null;
console.log(root);
console.log("length", removeNthFromEnd(root, 3));