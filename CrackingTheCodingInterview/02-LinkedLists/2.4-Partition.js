// Write code to partition a linked list around a value x such that all
// nodes less than x come before all nodes greater than or equal to x. if x
// is contained within the list, the values of x only need to be after the
// elements less than x. The partition element x can appear anywhere in the
// "right partition" . It does not need to appear between the left and right
// partiions

function Node(val){
  this.val = val;
  this.next = null;
}

function partitions(node,x){
  let small=[];
  let big=[];
  while (node !== null) {
    if (node.val < x) {
      small.push(node);
    }else {
      big.push(node);
    }
    node = node.next;
  }
  for (let i = 0; i < small.length -1; i++) {
    small[i].next = small[i+1];
  }
  small[small.length-1].next = big[0];
  for (let i = 0; i < big.length-1; i++) {
    big[i].next = big[i+1];
  }
  return small[0];
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
let x = partitions(a,"c");
console.log(x);
