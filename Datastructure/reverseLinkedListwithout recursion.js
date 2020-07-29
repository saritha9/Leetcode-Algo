
  function Node(val)
  {
    this.val = val;
    this.next = null;
  }
  
    
  var reverseList = function(head) {
      var result = null;
      var stack = [];
      
      var current = head;
      while (current) {
          stack.push(current);
          current = current.next;
      }
      
      // Set head to end of list.
      result = stack.pop() || [];
      current = result;
      
      while (current) {
          current.next = stack.pop();
          current = current.next;
      }
  
      return result;
  }
  
  const root = new Node(2);
  const n1 = new Node(3);
  const n2 = new Node(4);
  const n3 = new Node(5);
  const n4 = new Node(6);
  const n5 = new Node(7);
  root.next = n1;
  n1.next = n2;
  n2.next =n3;
  n3.next = n4;
  n4.next = n5;
  n5.next = null;
  console.log(root);
  console.log("reverse list", reverseList(root));