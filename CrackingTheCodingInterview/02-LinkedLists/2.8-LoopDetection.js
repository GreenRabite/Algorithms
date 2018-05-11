// Given a circular linked list, implement an alogirthm that returns the
// node at the beginning of the loop

function Node(val){
  this.val = val;
  this.next = null;
}

function loopDetection(root){
  let slow = root;
  let fast = root;
  while (slow !== fast) {
    if (fast === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

let a1 = new Node(1);
let a2 = new Node("I'm the circle root");
let a3 = new Node("Im the one");
let a4 = new Node(2);
let b1 = new Node(1);
let b2 = new Node(2);
let b3 = new Node(2);
let b4 = new Node(2);

a1.next=a2;
a2.next=a3;
a3.next=a4;
a4.next = a2;

let x = loopDetection(a1);
console.log(x);
