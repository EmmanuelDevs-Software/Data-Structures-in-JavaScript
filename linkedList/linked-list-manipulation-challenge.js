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


//start: null
// end 1 -> 2 ->3
function problem(){
    console.log('#1')
    let root = null;

    let n1 = new ListNode(1)
    let n2 = new ListNode(2)
    let n3 = new ListNode(3)

    root = n1
    n1.next =  n2;
    n2.next = n3;
    printList(root)
}

problem()


//start: 1 -> 2 ->3
// end 0-> 1 -> 2 ->3
function problem2(){
    console.log('#2')
    let root = new ListNode(1,  new ListNode(2, new ListNode(3)));
    let zero = new ListNode(0)

    zero.next = root;
    root = zero


    printList(root)
}
problem2()


//start: 1 -> 3 ->4
// end 1-> 2 -> 3 ->4
function problem3(){
    console.log('#3')

    let root = new ListNode(1);
    root.next = new ListNode(3)
    root.next.next = new ListNode((4))

    let two = new ListNode(2);
    two.next = root.next
    root.next = two

    printList(root)

}

problem3()

//start: 1 -> 2 ->3
// end 1-> 2 -> 3 ->4
function problem4(){
    console.log('#4')
    let root = new ListNode(1,  new ListNode(2, new ListNode(3)));
    let four = new ListNode(4);

    root.next.next.next = four
    printList(root)
}
problem4()



//start: 1 -> 99 ->2->3
// end 1-> 2 -> 3
function problem5(){
    console.log('#5')
    let root = new ListNode(1,  new ListNode(99, new ListNode(2, new ListNode(3))));

    root.next = root.next.next
    printList(root)

}
problem5()