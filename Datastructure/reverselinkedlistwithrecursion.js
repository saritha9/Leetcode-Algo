var reverseListRecursive = function(node, parent) {
    var result = parent || {};
    
    if (node) {
      var child = node.next;
      node.next = parent;
  
      result = reverseListRecursive(child, node);
    }
  
    return result;
  }
  
  