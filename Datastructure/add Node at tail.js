function Node(val){
    this.val =val;
    this.next = null;
  }
  let sllend = function(head, val)
  {
    let curr = head;
    let newnode = new Node(val);
    if(curr === null)
      return curr;
    while(curr.next !== null)
      {
       curr = curr.next;
      }
    curr.next = newnode;
    return head;
  }
  let endnode = function(head)
  {
    let curr = head;
    while(curr !== null)
    {
      curr = curr.next;
      if(curr.next === null)
        return curr;
    }
    
    
  }
  
  let head = new Node(3);
  let h1 = new Node(4);
  let h2 = new Node(5);
  let h3 = new Node(6);
  let h4 = new Node(7);
  head.next = h1;
  h1.next = h2;
  h2.next = h3;
  h3.next = h4;
  h4.next = null;
  console.log(head);
  
  
  console.log(sllend(head, 9));
  console.log("end value",endnode(head)); 