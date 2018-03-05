require 'bst_node'
require 'byebug'

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value)
    # setting the root here in case it is still nil
    @root = insert_into_tree(@root, value)
  end

  def find(value, node = @root)
    return nil if node.nil?
    return node if node.value == value

    if value < node.value
      find(value, node.left)
    elsif value > node.value
      find(value, node.right)
    end
  end

  def delete(value)
    @root = delete_from_tree(@root, value)
  end

  def maximum(node = @root)
    if node.right
      maximum_node = maximum(node.right)
    else
      maximum_node = node
    end
    maximum_node
  end

  def depth(node = @root)
    if node.nil?
      return -1;
    else
      left_depth = depth(node.left)
      right_depth = depth(node.right)

      if left_depth > right_depth
        return left_depth + 1
      else
        return right_depth + 1
      end
    end
  end

  def is_balanced?(node = @root)
    return true if node.nil?

    balanced = true
    left_depth = depth(node.left)
    right_depth = depth(node.right)
    balanced = false if (left_depth - right_depth).abs > 1

    if balanced && is_balanced?(node.left) && is_balanced?(node.right)
      return true
    end

    false
  end

  def in_order_traversal(node = @root, arr = [])
    # left children, itself, right children
    if node.left
      in_order_traversal(node.left, arr)
    end

    arr.push(node.value)

    if node.right
      in_order_traversal(node.right, arr)
    end

    arr
  end



  private

  def insert_into_tree(node, value)
    return BSTNode.new(value) if node.nil?

    if value <= node.value
      node.left = insert_into_tree(node.left, value)
    elsif value > node.value
      node.right = insert_into_tree(node.right, value)
    end

    node
  end

  def delete_from_tree(node, value)
    # if correct node is found, then call remove on it.
    # otherwise, recurse until you find it
    if value == node.value
      node = remove(node)
    elsif value <= node.value
      node.left = delete_from_tree(node.left, value)
    else value > node.value
      node.right = delete_from_tree(node.right, value)
    end
    node
  end

  def remove(node)
    if node.left.nil? && node.right.nil?
      # when node doesn't have children,
      # simply remove it.
      node = nil
    elsif node.left && node.right.nil?
      # when node only has one child,
      # delete it and promote its child to take its place.
      node = node.left
    elsif node.left.nil? && node.right
      node = node.right
    else
      # if node has two children,
      # promote the maximum node in its left subtree to replace itself
      # if that specific node that was promoted has children,
      # then promote
      node = replace_parent(node)
    end
    node
  end

  def replace_parent(node)
    replacement_node = maximum(node.left)
    if replacement_node.left
      promote_child(node.left)
    end

    # since the replacement_node is still pointing to its old children,
    # we have to update its children pointers
    replacement_node.left = node.left
    replacement_node.right = node.right

    replacement_node
  end

  def promote_child(node)
    if node.right
      current_parent = node
      maximum_node = maximum(node.right)
    else
      return node
    end
    current_parent.right = maximum_node.left
  end
end
