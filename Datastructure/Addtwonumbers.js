class ListNode {
    constructor(val){
      this.val = val;
      this.next = null;
    }  
  }
  
  generateListNode = (list) => {
    const [ele] = list;
    const sentinel = new ListNode(ele);
    let current = sentinel;
    for(let i = 1; i < list.length; i++){
      current = current.next = new ListNode(list[i]);
    }
    return sentinel;
  }
  
  const list1 = generateListNode([2, 4, 3]);
  const list2 = generateListNode([5, 6, 4]);
  
  const convertToValueList = (list) => {
    const res = [];
    do { res.push(list.val); } while(list = list.next);
    return res;
  }
  
  const addTwoNumbers = function(l1, l2) {
  
    const l1Values = convertToValueList(l1);
    const l2Values = convertToValueList(l2);
    
    const len = Math.max(l1Values.length, l2Values.length);
    
    let remainder = 0;
    const sum = [];
    for(let i = 0; i < len; i++){
       const tempSum = (l1Values[i] || 0) + (l2Values[i] || 0) + remainder;
  remainder = Math.floor(tempSum/10);
       sum.push(tempSum % 10);
    }
  
    console.log(sum);
    return generateListNode(sum);
  };
  
  const res = addTwoNumbers(list1, list2);
  console.log(res);
   