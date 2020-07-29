class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  
  function reverseLinkedList(head) {
  
   if(!head) return null;
   
   let p1 = head;
   let p2 = null;
    
    while(p1){
      let temp = p1.next;
      p1.next = p2;
      p2 = p1;
      p1 = temp;
    }
    
    return p2;
  }
  
  
  const a = new Node(1);
  a.next = new Node(2);
  a.next.next = new Node(3)
  
  console.log("Current Node",a);
  console.log("Reversed List",reverseLinkedList(a))