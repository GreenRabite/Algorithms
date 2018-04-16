// Given a direced graph, design an algorithim to find out whether there
// is a route between two nodes


function routeExists(a,b){
  let queueA = [];
  let queueB = [];
  queueA.push(a);
  while (queueA.length !== 0) {
    let node = queueA.shift();
    node.visited = true;
    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];
      if (child.value === b.value) {
        return true;
      }
      if (child.visited === false) {
        child.visited = true;
        queueA.push(child);
      }
    }

  }
  queueB.push(b);
  while (queueB.length !== 0) {
    let node = queueB.shift();
    node.visited = true;
    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];
      if (child.value === a.value) {
        return true;
      }
      if (child.visited === false) {
        child.visited = true;
        queueB.push(child);
      }
    }
  }
  return false;
}


function Node(value){
  this.children = [];
  this.value = value;
  this.visited = false;
}

let a = new Node("a");
let b = new Node("b");
// a.children.push(b);
b.children.push(a);

let x = routeExists(a,b);
console.log(x);
