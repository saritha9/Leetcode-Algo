function Node(val) {
    this.val = val;
    this.next = null;
 }
var findlength = function(root)
{
 var length =0;
 while(root !== null)
 {
   root = root.next;
   length = length + 1;
 }
 return length;
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
console.log("length", findlength(root));

//recurssion
function Node(val) {
    this.val = val;
    this.next = null;
 }
var findlength = function(root)
{
 current = root;
 if(current === null ){
   return null;
 }
 return 1+findlength(current.next);
 
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
console.log("length", findlength(root));