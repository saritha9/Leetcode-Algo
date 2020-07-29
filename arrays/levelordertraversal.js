
    
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }    
   function level_order(root, nodes) {
      var queue = [root];
      while (queue.length > 0) {
          // front of queue is at element 0 and we push elements to back of queue
          var n = queue.shift();
          nodes.push(n.data);
          if (n.left !== null) { queue.push(n.left); }
          if (n.right !== null) { queue.push(n.right); }
      }
      return nodes;
  }
  
  
  var root = new Node('A');
  var n1 = new Node('B');
  var n2 = new Node('C');
  var n3 = new Node('D');
  var n4 = new Node('E');
  
  // setup children
  root.left = n1;
  root.right = n2;
  n1.left = n3;
  n1.right = n4;
  
  console.log(level_order(root, [])); 
  
  
  //console.log(levelOrder(root));