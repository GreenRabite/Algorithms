require_relative "heap"

class Array
  def heap_sort!
    # p self
    raise "sorted already" if self.length <= 1
    #Make the array a valid heap object
    (1..self.length-1).each do |idx|
      BinaryMinHeap.heapify_up(self,idx,idx+1)
    end
    p self

    #Performs the heapsort
    partition = self.length
    # p partition
    until partition == 0
      p partition
      self[partition-1], self[0] = self[0],self[partition-1]
      p self
      partition -= 1
      BinaryMinHeap.heapify_down(self, 0, partition)
    end
    self.reverse!
  end
end
