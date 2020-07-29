function ListNode(val) {
	this.val = val;
	this.next = null;
}

var removeNthFromEnd = function(head, n) {
	var pointer1 = head; 
	var pointer2;
	
	// placing pointer2 n steps ahead of pointer1
	let node = head;
	let i = 0; 
	while (node) {
		if (i === n){
			pointer2 = node;
			break; 
		} 
		node = node.next;
		i++; 
	}

	let result = pointer1; 
	
	while ( pointer2 ){
		if (!pointer2.next) { // then we have reached the end of the list 
			console.log(`we need to remove the next val of ${pointer1.val}`);
			pointer1.next = pointer1.next.next;
			console.log(pointer1);
			result.next = pointer1;
			return result;
		}
		pointer1 = pointer1.next;
		result.next = pointer1;
		pointer2 = pointer2.next;
	}
	
};

var linkedlist = new ListNode(5);
linkedlist.next = new ListNode(4);
linkedlist.next.next = new ListNode(3);
linkedlist.next.next.next = new ListNode(2);

removeNthFromEnd(linkedlist, 2);



