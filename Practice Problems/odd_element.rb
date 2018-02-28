arr = [0,1,1,2,2]

def odd_element(arr)
  p arr
  return arr.first if arr.length <= 1
  mid=arr.length/2
  if arr.length.odd?
    if (arr[mid+1] != arr[mid] && arr[mid-1] != arr[mid])
      return arr[mid]
    elsif (arr[mid+1] == arr[mid])
      odd_element(arr[mid..-1])
    else
      odd_element(arr[0..mid])
    end
  else
    if (arr[mid+1] != arr[mid] && arr[mid-1] != arr[mid])
      return arr[mid]
    elsif (arr[mid+1] == arr[mid])
      odd_element(arr[mid+1..-1])
    else
      odd_element(arr[0...mid])
    end
  end
end

p odd_element(arr)
