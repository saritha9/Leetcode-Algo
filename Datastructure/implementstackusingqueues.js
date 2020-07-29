class Data {
    constructor(val, prev) {
      this.val = val;
      this.prev = prev;
    }
  }
  
  class MyStack {
    constructor() {
      this.head = null;
    }
  
    push(x) {
      this.head = new Data(x, this.head);
    }
  
    pop() {
      const { head } = this;
      if (!head) {
        return;
      }
      this.head = head.prev;
      return head.val;
    }
  
    top() {
      return this.head ? this.head.val : undefined;
    }
  
    empty() {
      return !this.head;
    }
  }
  
  var d = new MyStack();
  d.push(2);
  d.push(3);
  d.push(4);
  d.push(9);
  console.log(d);
  d.pop();
  console.log(d);
  d.top();
  d.push(13);
  console.log(d);