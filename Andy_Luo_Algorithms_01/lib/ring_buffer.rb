require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    self.store = StaticArray.new(8)
     self.capacity = 8
    self.start_idx = 0
    self.length = 0
  end

  # O(1) lookup
  def [](index)
    check_index(index)
    store[(start_idx + index) % capacity]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    store[(start_idx + index) % capacity] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if (length == 0)

    value = self[length - 1]
    self[length - 1] = nil
    self.length -= 1

    #return item which has been popped off the array
    value
  end

  # O(1) ammortized
  def push(value)
    resize! if (length == capacity)
    self.length += 1
    self[length - 1] = value

    # return the updated array
    self.store
  end

  # O(1)
  def shift
    raise "index out of bounds" if (length == 0)

    value = self[0]
    self[0] = nil
    self.start_idx = (start_idx + 1) % capacity
    self.length -= 1

    #return item which has been shifted off the array
    value
  end

  # O(1) ammortized
  def unshift(value)
    resize! if (length == capacity)

    self.start_idx = (start_idx - 1) % capacity
    self.length += 1
    self[0] = value

    # return the updated array
    self.store
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    unless (index >= 0) && (index < length)
      raise "index out of bounds"
    end
  end

  # O(n) (has to copy each element over to a new store)
  def resize!
    new_capacity = capacity * 2
    new_store = StaticArray.new(new_capacity)
    length.times { |i| new_store[i] = self[i] }

    self.capacity = new_capacity
    self.store = new_store
    self.start_idx = 0
  end
end
