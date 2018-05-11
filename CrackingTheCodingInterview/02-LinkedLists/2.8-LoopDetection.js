// Given a circular linked list, implement an alogirthm that returns the
// node at the beginning of the loop

function Node(val){
  this.val = val;
  this.next = null;
}

function loopDetection(root){
  let slow = root.next;
  let fast = root.next.next;
  while (slow !== fast) {
    if (fast === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  // console.log(slow);
  // console.log(fast);
  slow = root;
  // console.log(slow);
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

let a1 = new Node("a1");
let a2 = new Node(1);
let a3 = new Node(3);
let a4 = new Node("Im the one");
let b1 = new Node("b1");
let b2 = new Node(2);
let b3 = new Node(2);
let b4 = new Node(2);

a1.next=a2;
a2.next=a3;
a3.next=a4;
a4.next=b1;
b1.next=b2;
b2.next=b3;
b3.next=a4;

let x = loopDetection(a1);
console.log(x);
