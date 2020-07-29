// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

class SLL{
    constructor(){
        this.head = null;
    }
    
     
    display()
    {
        var str = '';
      var curr = this.head;
      while(curr){
        str += curr.val + "-->";
        curr = curr.next;
      }
      console.log(str);
      return this;
    }
    arrange()
    {
        var deque = [];
        var curr = this.head;
        while(cur != null)
        {
            deque.push(curr.val);
            curr = curr.next;
        }
        curr = this.head;
        var i =0;
        while(deque !== null )
        if(i % 2 == 0)
        {
            curr.val = deque.shift();
        }
        else
            { 
                curr.val = deque.pop(); 
            } 
            i++; 
            curr = curr.next; 

    }
}
class node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
    
  
    
    // Driver code 
//     public static void main (String[] args) 
//     { 
//         // Let us create linked list 1->2->3->4->5 
//         Node head = null;  
          
//         head = new Node(1); 
//         head.next = new Node(2); 
//         head.next.next = new Node(3); 
//         head.next.next.next = new Node(4); 
//         head.next.next.next.next = new Node(5); 
  
//         System.out.println("Given linked list");  
//         printList(head);  
//         arrange(head);  
//         System.out.println("\nAfter rearrangement"); 
//         printList(head); 
//     } 
// } 
// 
function ListNode(val) {
       this.val = val;
       this.next = null;
   }
   var reverseList = function (head) {
    if (head === null || head.next === null) return head;
    var prev = new ListNode(0);
    prev.next = head;
    head = prev;
    var cur = prev.next;
    while(cur.next !== null) {
        var tmp = cur.next;
        cur.next = tmp.next;
        tmp.next = prev.next;
        prev.next = tmp;
    }
    return prev.next;
}
var reorderList = function(head) {
    if (!head || !head.next) return;
    var fast = head;
    var slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var second = reverseList(slow.next);
    slow.next = null;
    var first = head;
    while (second) {
        var temp = second.next;
        second.next = first.next;
        first.next = second;
        
        first = first.next.next;
        second = temp;
    }
   
}
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1;
console.log(reorderList);
