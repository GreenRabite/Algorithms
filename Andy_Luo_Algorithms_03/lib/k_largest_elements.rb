require_relative 'heap'

def k_largest_elements(array, k)
  # p array
  # p k
  prc = Proc.new { |x,y| y <=> x}
  #Make the array a valid heap object
  (1..array.length-1).each do |idx|
    BinaryMinHeap.heapify_up(array,idx,idx+1,&prc)
  end
  # p array

  #Performs the heapsort
  partition = array.length
  # p partition
  until partition == 0
    # p partition
    array[partition-1], array[0] = array[0],array[partition-1]
    # p array
    partition -= 1
    BinaryMinHeap.heapify_down(array, 0, partition, &prc)
    # p array
  end
  # array[0..k-1]
  array.reverse[0..k-1]
  # array.reverse!

end

# heap implications
 #concern with finding the extreme elements
