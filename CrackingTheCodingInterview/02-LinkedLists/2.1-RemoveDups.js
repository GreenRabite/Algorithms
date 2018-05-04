// Write code to remove duplicates from an unsorted linked list
// Follow Up: How would ou solve this problem if a temp buffer is not allowed

//Approach iterate through list and store value in a hash map
// If hash map is true, remove that node from the linked list
//BONUS APPROACH: have two runner. One iterate normally while the second
// runner go toward null and delete if it equals current. O(1) space but
//O(n^2) time
function Node(val){
  this.val = val;
  this.next = null;
}

function removeDups(root){
  let seen = {};
  let node = root;
  seen[node.val] = true;
  while (node.next !== null) {
    let nextNode = node.next;
    if (seen[nextNode.val] === true) {
      node.next = nextNode.next;
      nextNode.next = null;
    }
    node = node.next;
  }
  return root;
}

let a = new Node("a");
let b = new Node("b");
let a1 = new Node("a");
let d = new Node("d");

a.next = b;
b.next = a1;
a1.next = d;

let x = removeDups(a);
console.log(x);
