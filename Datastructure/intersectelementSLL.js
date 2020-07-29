function Node(val)
{
  this.val = val;
  this.next = null;
}
var getIntersectionNode = function(headA, headB) 
{
   var map1=new Map();
   let a=headA;
   let b=headB;
    
   while(a)
   {
       map1.set(a,true);
       a=a.next;
   }
   console.log(map1);
   while(b)
   {
        if(map1.get(b)==true)
        {
            return b;
        }
        else
        {
            map1.set(a,true);
            b=b.next;
        }
   } 
    return null;
}
let head = new Node(4);
 let l1 = new Node(5);
let l2  = new Node(3);
let l3  = new Node(2);
let l4 = new Node(1);
let l5 = new Node(8);
let head1 = new Node(10);
 head1.next = l2;
l2.next = l3;
l3.next = l5;
l5.next = null;

head.next = l1;
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;
console.log(head, head1);
console.log("intersect element",getIntersectionNode(head, head1)); 

