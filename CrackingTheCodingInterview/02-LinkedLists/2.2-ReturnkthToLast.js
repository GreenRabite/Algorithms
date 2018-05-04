// Implement an algorithm to find the kth to last element of a singly linked
// list

function Node(val){
  this.val = val;
  this.next = null;
}

function kthLastElement(node,k){
  let i = 0;
  let current = node;
  let runner = node;
  while (i < k) {
    current = current.next;
    i++;
  }
  while (current !== null) {
    current = current.next;
    runner = runner.next;
  }
  return runner;
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

let x = kthLastElement(a,3);
console.log(x);
