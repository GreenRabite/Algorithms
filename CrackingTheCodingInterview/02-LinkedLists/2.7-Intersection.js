// Given two singly linked lists, determine if two lsits intersect. Return
// the intersecting node. Note that the intersection is defined based on reference,
// not value. That is, if the kth node of first linked list is exact same node as jth node of 2nd linked list,
// they are intersecting



function Node(val){
  this.val = val;
  this.next = null;
}

function intersection(rootA,rootB){
  //Check to see if the two linked list are intesecting to begin with
  let listA=1;
  let listB=1;
  let nodeA = rootA;
  let nodeB = rootB;
  while (nodeA.next !== null) {
    nodeA = nodeA.next;
    listA++;
  }

  while (nodeB.next !== null) {
    nodeB = nodeB.next;
    listB++;
  }
  if (nodeA !== nodeB) return false;
  if (listA !== listB) {
    if (listA > listB) {
      for (let i = 0; i < listA - listB; i++) {
        rootA = rootA.next;
      }
    }
    if (listA < listB) {
      for (let i = 0; i < listB - listA; i++) {
        rootB = rootB.next;
      }
    }
  }
  while (true) {
    if(rootA === rootB) return rootA;
    rootA = rootA.next;
    rootB = rootB.next;
  }
}

let a1 = new Node(1);
let a2 = new Node(2);
let a3 = new Node("Im the one");
let a4 = new Node(2);
let b1 = new Node(1);
let b2 = new Node(2);
let b3 = new Node(2);
let b4 = new Node(2);

a1.next=a2;
a2.next=a3;
a3.next=a4;
b1.next=b2;
b2.next=a3;


let x = intersection(a1,b1);
console.log(x);
