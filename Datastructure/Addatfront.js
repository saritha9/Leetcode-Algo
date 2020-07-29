class LinkedList
{
    Constructor(value){
        this.head = null;
        this.length =0;
        this.addToHead(Value);

    }   
    addToHead(value)
    {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }
}
const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');