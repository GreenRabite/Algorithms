require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(8)
    @length = 0
    @capacity = 8
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    value = self[length-1]
    self[length-1]=nil
    @length -= 1

  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @length == @capacity

    @store[@length] = val
    @length +=1
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length ==0
    shift_value = @store[0]
    new_arr = StaticArray.new(@capacity)
    i=1
    while i < @length
      new_arr[i-1] = @store[i]
      i+=1
    end
    @length -= 1
    @store= new_arr
    shift_value
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @length == @capacity
    stored_arr = @store
    @store = StaticArray.new(@capacity)
    @store[0] = val
    i=0
    while i < @length
      @store[i+1] = stored_arr[i]
      i+=1
    end
    @length+=1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    raise "index out of bounds" if index >= @length
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity *= 2
    saved_store = @store
    @store = StaticArray.new(@capacity)
    i=0
    while i < @length
      @store[i] = saved_store[i]
      i+=1
    end
  end
end
