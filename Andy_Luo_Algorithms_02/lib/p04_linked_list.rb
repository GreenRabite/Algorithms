class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous node to next node
    # and removes self from list.
    if self.prev
      self.prev.next = self.next
    end

    if self.next
      self.next.prev = self.prev
    end
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |node, j| return node if i == j }
    nil
  end

  def first
    @head.next unless @head.next == @tail
  end

  def last
    @tail.prev unless @tail.prev == @head
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    return nil unless include?(key)

    node = @head
    until node.key == key
      node = node.next
    end

    node.val
  end

  def include?(key)
    node = @head

    until node.key == key
      node = node.next
      return false if node.nil?
    end

    true
  end

  def append(key, val)
    new_node = Node.new(key, val)
    new_node.next, new_node.prev = @tail, @tail.prev

    (@tail.prev).next = new_node

    @tail.prev = new_node
  end

  def update(key, val)
    return unless include?(key)

    node = @head
    until node.key == key
      node = node.next
    end

    node.val = val
  end

  def remove(key)
    return unless include?(key)

    node = @head
    until node.key == key
      node = node.next
    end

    node.remove
  end

  def each
    node = @head.next

    until node == @tail
      yield(node)
      node = node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, node| acc << "[#{node.key}, #{node.val}]" }.join(", ")
  end
end
