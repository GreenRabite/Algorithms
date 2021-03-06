class MaxIntSet
  def initialize(max)
    @max = max
    @store=[]
  end

  def insert(num)
    validate!(num)
    @store[num] = true
  end

  def remove(num)
    validate!(num)
    @store[num]=false
  end

  def include?(num)
    validate!(num)
    @store[num]
  end

  private

  def is_valid?(num)
    num < @max && 0 < num
  end

  def validate!(num)
    raise "Out of bounds" unless is_valid?(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num unless self.include?(num)
  end

  def remove(num)
    self[num].delete(num) if self.include?(num)
  end

  def include?(num)
    index = num % num_buckets
    @store[index].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count >= num_buckets
    self[num] << num
    @count+=1
  end

  def remove(num)
    self[num].delete(num)
    @count -=1
  end

  def include?(num)
    index = num % num_buckets
    @store[index].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_values = @store.flatten
    temp_store = @store
    @store = Array.new(num_buckets * 2) { Array.new }
    @count=0
    old_values.each do |int|
      self.insert(int)
    end
  end
end
