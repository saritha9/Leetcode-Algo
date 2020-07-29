function Node(val) {
    this.val = val;
    this.next = null;
 }
var deleteDuplicates = function(head) 
{
   if(!head)
       return head;
   var cur=head;
   while(cur.next != null)
   {
       var nextnode=cur.next;
       if(cur.val === nextnode.val)
       {
            cur.next=cur.next.next;
       }
       else
       {
           cur=cur.next;
       } 
   }
   return head;
};
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
console.log("remove duplicate unsorted list", deleteDuplicates(root));