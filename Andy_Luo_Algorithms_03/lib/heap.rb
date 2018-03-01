class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store=[]
    @prc=prc
  end

  def count
    @store.length
  end

  def extract
    node = @store[0]
    if self.count > 1
      @store[0] = @store.pop
      BinaryMinHeap.heapify_down(@store, 0, &@prc)
    else
      @store.pop
    end
    node
  end

  def peek
    @store[0]
  end

  def push(val)
    @store << val
    BinaryMinHeap.heapify_up(@store, self.count - 1, &prc)
  end

  public
  def self.child_indices(len, parent_index)
    children=[]
    first_child_idx = 2 * parent_index + 1
    second_child_idx = 2 * parent_index + 2
    children << first_child_idx if len > first_child_idx
    children << second_child_idx if len > second_child_idx
    children
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end


  #swap nodes until children nodes are greater than the parents
  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |x,y| x <=> y }
    children = self.child_indices(len, parent_idx)
    if children.all? { |child_idx| prc.call(array[parent_idx],array[child_idx]) < 0}
      return array
    end

    # if in_order?
    #   return array
    # end

    if children.length == 1
      swap_idx = children[0]
    else
      swap_idx = prc.call(array[children[0]],array[children[1]]) == -1 ? children[0] : children[1]
    end

    array[parent_idx], array[swap_idx] = array[swap_idx], array[parent_idx]
    self.heapify_down(array, swap_idx, len, &prc)

  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |x,y| x<=>y }

    return array if child_idx == 0
    parent_idx = self.parent_index(child_idx)

    if prc.call(array[parent_idx],array[child_idx]) > 0
      array[parent_idx], array[child_idx] = array[child_idx], array[parent_idx]
      self.heapify_up(array,parent_idx, len, &prc)
    end

    return array
  end
end
