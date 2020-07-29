// Given 1->2->3->4, you should return the list as 2->1->4->3.
function swap_adjacent_digits(n) 
{
  if (n%2!=0)
    {
    return false;
    }

  var result = 0,
		x = 1;
	while (n != 0) {
		var dg1 = n % 10,
			dg2 = ((n - dg1) / 10) % 10;
		result += x * (10 * dg1 + dg2);
		n = Math.floor(n / 100);
		x *= 100;
	}
	return result;
}
console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));

// ES6 Version:

function swap_adjacent_digits(n) 
{
    if (n%2!=0)
      {
      return false;
      }

    let result = 0;
    let x = 1;
    while (n != 0) {
        const dg1 = n % 10;
        const dg2 = ((n - dg1) / 10) % 10;
        result += x * (10 * dg1 + dg2);
        n = Math.floor(n / 100);
        x *= 100;
    }
    return result;
}

console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));

// LinkedList
LinkedList.prototype.swapPairs = function() {
    var recurse = function(current) {
        if (!current) return this;
        if (current.next) {
            var save = current.next.value;
            current.next.value = current.value; //No REsult not working
            current.value = save;
            current = current.next;
        }
        return recurse(current.next);
    }.bind(this);
    return recurse(this.head);
}//

// LinkedList:
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
// class Solution {
//     public ListNode swapPairs(ListNode head) {

//         // Dummy node acts as the prevNode for the head node
//         // of the list and hence stores pointer to the head node.
//         ListNode dummy = new ListNode(-1);
//         dummy.next = head;

//         ListNode prevNode = dummy;

//         while ((head != null) && (head.next != null)) {

//             // Nodes to be swapped
//             ListNode firstNode = head;
//             ListNode secondNode = head.next;

//             // Swapping
//             prevNode.next = secondNode;
//             firstNode.next = secondNode.next;
//             secondNode.next = firstNode;

//             // Reinitializing the head and prevNode for next swap
//             prevNode = firstNode;
//             head = firstNode.next; // jump
//         }

//         // Return the new head node.
//         return dummy.next;
//     }
// }
function swapadjacentpair()
{
    
}