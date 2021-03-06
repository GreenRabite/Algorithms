# Binary Search Tree

---

![BST](http://i0.kym-cdn.com/photos/images/original/001/272/773/6dd.jpg "Binary Search Tree")

---

## Agenda

* Review HW solutions
* Do interview problems

**Primarily you talking today; grab a partner!**
**Also, if you have a good solution, send it in!**

---

## BST 

Structure:

* Partners explain their implementation to each other (2 minutes each) 
* Practice explaining as if you were explaining to an interviewer (1 minute each)
* Review solutions (1 minute) 
* Clarify/Discuss  (1 minute)
* Questions (2 minutes)

---

## BST

* `#insert`
* `#find`
* `#delete` & `#maximum`
* `#is_balanced?` & `#depth`
* `#in_order_traversal`

---

## `#kth_largest_node`

* Discuss your implementation and time complexity with partner (5 minutes)
* Review Solution (1.5 minutes)
* Clarify/Discuss (1 minute)
* Questions (2 minutes)

---

## `#kth_largest` code

```ruby
def kth_largest(tree_node, k)
  kth_node = { count: 0, correct_node: nil }
  reverse_inorder(tree_node, kth_node, k)[:correct_node]
end

def reverse_inorder(tree_node, kth_node, k)
  if tree_node && kth_node[:count] < k 
    kth_node = reverse_inorder(tree_node.right, kth_node, k)
    if kth_node[:count] < k 
      kth_node[:count] += 1
      kth_node[:correct_node] = tree_node 
    end

    if kth_node[:count] < k
      kth_node = reverse_inorder(tree_node.left, kth_node, k)
    end
  end

  kth_node
end
```

---

# Interview Questions

---

## Warm Up (5 minutes)

* Implement Pre Order Traversal
    * Root, Left, Right
* Implement Post Order Traversal
    * Left, Right, Root

--- 

## Warm Up Discussion (2 minutes)

* Explain to your partner how you implemented it

---

## Warm Up Solution

* Same structure as `in_order_traversal`, except with the order switched
accordingly.

---

## In Order Traversal Iteratively (12 minutes)

* Implement an in order traversal iteratively. No need to return the array of
elements, just print out the node's `value` in the correct order.

---

## In Order Traversal Iteratively Discussion (3 minutes)

* Explain to your partner how you implemented it

---

## In Order Iterative Algorithm

1. create an empty stack
2. initialize current node as root
3. push the current into the stack, and set current as current.left until
current is null;
4. if current is null and stack isn't empty
  1. pop top item from stack and print
  2. set current to popped item.right
  3. go back to step 3
5. if current is null and stack is empty then we are done

---

## In Order Iterative Code

```ruby
  def inorder_iter(tree_node)
    stack = []
    current = tree_node 
    until current.nil? && stack.empty?
      if current
        stack << current 
        current = current.left 
      else
        top_node = stack.pop
        p top_node.value
        current = top_node.right 
      end
    end
  end
```

---

## `lowest_common_ancestor` (10 minutes)

In a binary search tree, an *ancestor* of a `example_node` is a node that is on a higher level than `example_node`, and can be traced directly back to `example_node` without going down any levels. (I.e., this is intuitively what you think an ancestor should be.) Every node in a binary tree shares at least one ancestor -- the root. In this exercise, write a function that takes in a BST and two nodes, and returns the node that is the lowest common ancestor of the given nodes. Assume no duplicate values.

---

## `#lca` Part 2 (5 minutes)

* If you implemented your LCA solution recursively, now do it iteratively.
* If you implemented it iteratively, now do it recursively.

---

## `#lca` discussion (3 minutes)

* 1 partner explains the iterative solution.
* The other explains the recursive solution.

---

## `#lca` recursive

```ruby

def lca(tree_node, node1, node2)
  smaller = node1.value < node2.value ? node1.value : node2.value
  bigger = node1.value > node2.value ? node1.value : node2.value

  if tree_node.value >= smaller && tree_node.value <= bigger
    lca = tree_node
  elsif tree_node.value > smaller && tree_node.value > bigger
    lca = lca(tree_node.left, node1, node2)
  elsif tree_node.value < smaller && tree_node.value < bigger
    lca = lca(tree_node.right, node1, node2)
  end

  lca
end
```

---

## `#lca` iterative

```ruby
def lca_iter(tree_node, node1, node2)
  smaller = node1.value < node2.value ? node1.value : node2.value
  bigger = node1.value > node2.value ? node1.value : node2.value

  while !(tree_node.value >= smaller && tree_node.value <= bigger)
    if tree_node.value > smaller && tree_node.value > bigger 
      tree_node = tree_node.left 
    elsif tree_node.value < smaller && tree_node.value < bigger
      tree_node = tree_node.right 
    end 
  end

  tree_node
end
```
--- 

## Iterative vs. Recursive for LCA

* What are the differences?

---