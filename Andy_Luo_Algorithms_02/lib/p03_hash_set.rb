require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    hash_val = key.hash
    return if self.include?(key)
    resize! if @count >= num_buckets
    self[hash_val] << key
    @count+=1
  end

  def include?(key)
    hash_val = key.hash
    self[hash_val].include?(key)
  end

  def remove(key)
    hash_val = key.hash
    return unless self.include?(key)
    self[hash_val].delete(key)
    @count-=1

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
    keys = @store.flatten
    @store = Array.new(2*num_buckets){Array.new}
    @count =0
    keys.each do |key|
      self.insert(key)
    end
  end
end
