class SLL{
    constructor()
    {
        this.head = null;
    }
    insertNthpostion(data, pos)
    {
    var curr = this.head;
    if (curr === null)
    {
        if(pos !== 0)
        {
        return;
        }
        else
        {
        curr = new node(val);
        }
    }
    if(curr!= null && pos == 0)
    {
        curr.next = curr;
        curr = new node(val);
        return;

    }
    while (i < pos) {
        curr.previous = curr;
        curr = curr.next;
        
        if (curr == null) 
        {
        break;
        }
        i++;
        }
        node.next = curr;
        previous.next = node;
   }
}// public void insertNth(int data, int position) {
//     //create new node.
//     Node node = new Node();
//     node.data = data;
//     node.nextNode = null;

//     if (this.head == null) {
//       //if head is null and position is zero then exit.
//       if (position != 0) {
//        return;
//       } else { //node set to the head.
//        this.head = node;
//       }
//     }

//     if (head != null && position == 0) {
//       node.nextNode = this.head;
//       this.head = node;
//       return;
//     }

//     Node current = this.head;
//     Node previous = null;

//     int i = 0;

//     while (i < position) {
//       previous = current;
//       current = current.nextNode;

//       if (current == null) {
//         break;
//       }

//        i++;
//       }

//       node.nextNode = current;
//       previous.nextNode = node;
// }

class node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }