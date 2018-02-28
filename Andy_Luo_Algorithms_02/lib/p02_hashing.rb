class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    result=""
    self.each_with_index do |el,idx|
      result += (el.hash + idx.hash).to_s
    end
    result.hash
  end
end

class String
  def hash
    result=""
    self.split("").each do |el|
      result += el.ord.to_s
    end
    result.to_i.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.keys.sort.hash
  end
end
