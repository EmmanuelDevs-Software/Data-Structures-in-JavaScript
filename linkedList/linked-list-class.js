//this class represents each single node
// this class is extremely simple and just modls the node
// this class DOES NOT have methods in it
class ListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next
    }
}

// this class represents an entire list of nodes
// this class has property "root" that represents
// only the first node in the list
//this class has methods that operative the entire list from just the root
class LinkedList {
    constructor() {
        this.root = null
        this.size = 0
    }

    //O(1)
    // returns true or false if there are any nodes in the list
    isEmpty() {
        return this.root === null
    }

    //O(1)
    // add a value to the front of the list
    prepend(data) {
        let node = new ListNode(data)
        node.next = this.root
        this.root = node
        this.size++
    }
      //O(1)
      //addAtIndex must visit every node to get to the end of the list
    append(Data){
      this.addAtIndex(this.size - 1, index)
    }

    // returns the size of the list
    //O(n) linear time
    lengthOfTheList() {
        let current = this.root
        let count = 0;
        while (current !== null) {
            count += 1
            current = current.next
        }
        return count
    }

    //O(n) linear time
    // returns a string representing the list
    toStringList() {
        let result = "root ->";
        let current = this.root;

        while (current !== null) {
            result += current.data + " ->"
            current = current.next
        }
        return result + " null"
    }

    //O(n) linear time
    get(index) {
        let current = this.root;
        let count = 0
        while (current !== null) {
            if (count === index) {
                return current.data
            }
            count++
            current = current.next
        }
        return null
    }

    //O(n) linear
    // we must move through the list to get to the element we want to remove
    removeAtIndex(index) {
        if (index < 0 || index >= this.size) {
            // prevent people from trying to remove nodes at non-existant indexes
            return
        }
        if (index === 0) {
            this.removeFront();
        } else {
            this.removeRest(index)
        }
        this.size--
    }

    removeFront() {
        if (this.root !== null) {
            this.root = this.root.next
        }
    }


    removeRest(index) {
        let current = this.root
        let i = 0
        while (current !== null && i < index - 1) {
            i++
            current = current.next
        }
        current.next = current.next.next
    }

    //O(1)
    //must visist every node to the proper index
    addAtIndex(index, value){
      if(index === 0){
        this.prepend(value)
      }else{
        let current  = this.root;
        let  i = 0;
        while(current !== null  && i < index - 1){
          i++
          current = current.next
        }
        let node = new ListNode(value)
        node.next = current.next
        current.next = node
      }
    this.size++
    }
}

let list = new LinkedList()
console.log(list.toStringList())
list.prepend(5)
list.prepend(4)
list.prepend(3)
list.prepend(2)
list.prepend(1)
console.log(list.toStringList())
console.log(list.lengthOfTheList())
console.log(list.isEmpty())
console.log(list.get(2))
let l2 = new LinkedList()
for (let i = 10; i >= 0; i--) {
    l2.prepend(i)
}


console.log(l2.toStringList());
console.log("remove @7")
l2.removeAtIndex(7)
console.log(l2.toStringList());
console.log("remove @0")
l2.removeAtIndex(0)
console.log(l2.toStringList());
console.log("remove last")
l2.removeAtIndex(l2.lengthOfTheList() - 1)
console.log(l2.toStringList());

console.log("adding ant indexes");
l2.addAtIndex(0, -100)
l2.addAtIndex(1, 50)
l2.addAtIndex(2, 120)
l2.addAtIndex(5, 44)
l2.addAtIndex(l2.size - 1, 9999)
console.log(l2.toStringList());
