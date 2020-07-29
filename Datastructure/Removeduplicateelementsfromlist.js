function Node(val)
{
  this.val = val;
  this.next =null;
}
var result = [];
var deleteDuplicates = function(head) {
    var dummy = new Node(0),
        duplicate = null,
        node;
    
    dummy.next = head;
    node = head;
    var prev = dummy;
    
    while (!node.next) {
        if (node.val === duplicate || node.val === node.next.val) {
            duplicate = node.val;
            prev.next = node.next;
        } else {
            prev = prev.next;
        }

        node = node.next;
    }
    
    if (node && node.val === duplicate) {
        prev.next = null;
    }
    
    return dummy.next;
}


let head = new Node(4);
let l1 = new Node(3);
let l2 = new Node(5);
let l3 = new Node(6);
let l4 = new Node(6);
let l5 = new Node(5);
head.next = l1;
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = null;
//l6.next = null;
console.log(deleteDuplicates(head));
