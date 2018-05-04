// Implement an algorithm to delete a node in the middle (IE any node but  the
// first and last node) of a singly linked list given only acces to that node

//Approach: have a new pointer tat copy the next node in line . Remove current
// node from linked list

function deleteMiddleNode(node){
  node.val = node.next.val;
  node.next = node.next.next;
  node.next.next = null;
  return node;
}

function Node(val){
  this.val = val;
  this.next = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

let x = deleteMiddleNode(c);
console.log(x);
console.log(b);
console.log(d);
