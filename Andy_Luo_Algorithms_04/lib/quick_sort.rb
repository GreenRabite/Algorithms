class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    prc ||= Proc.new { |x,y| x <=>y }
    return array if array.length < 2
    pivot = array.shift
    left , right = [] , []
    array.each do |el|
      if prc.call(el,pivot) === -1
        left << el
      else
        right << el
      end
    end
    QuickSort.sort1(left) + [pivot] + QuickSort.sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    p array
    return  if length < 2
    prc ||= Proc.new {|x,y| x<=>y}
    pivot_idx = self.partition(array,start,length, &prc)
    left_part_length = pivot_idx - start
    right_part_length = length - pivot_idx -1
    self.sort2!(array,start, left_part_length, &prc)
    self.sort2!(array, (pivot_idx+1), right_part_length, &prc)
    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new {|x,y| x<=>y}
    # p array
    pivot_idx = start
    pivot_el = array[start]
    (start+1...start + length).each do |idx|
      if prc.call(pivot_el, array[idx]) == 1
        array[pivot_idx + 1], array[idx] = array[idx], array[pivot_idx +1]
        pivot_idx += 1
      end
    end
    array[pivot_idx], array[start] = array[start], array[pivot_idx]
    pivot_idx
  end
end

p QuickSort.sort1([3,2,1])
