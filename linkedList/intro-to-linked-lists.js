class ListNode{
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}

// the "for-loop" for likend list
function printList(node){
    let current = node;
    while(current != null){
        console.log(current.data);
        current =  current.next
    }
}
///accepts a node at the front of the list
// and returns the total sum of all values
function sumList(node){
let current = node;
let total = 0
while(current != null){
    total += current.data
    current = current.next

}
console.log(total)
return total
}

let n1 = new ListNode(4)
let n2 = new ListNode(15)
let n3 = new ListNode(6)

n1.next = n2
n2.next = n3

printList(n1)
sumList(n1)