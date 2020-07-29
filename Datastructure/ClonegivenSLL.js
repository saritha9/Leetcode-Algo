function Node(val)
{
  this.val = val;
  this.next = null;
}
let clonell = function(head)
{
  var stack =[];
  var curr = head;
  while(curr.next !== null)
  {
    curr = curr.next;
  
  stack.push(curr.val);
  }
  return stack;
  
}
let head = new Node(4);
let l1 = new Node(5);
let l2 = new Node(6);
let l3 = new Node(7);
let l4 = new Node(8);
head.next = l1;
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;
console.log(head);
console.log(clonell(head));

