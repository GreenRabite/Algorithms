### Arrays Are Awesome
Let's start with some array manipulation to get us warmed up. Find the time complexity of each of the following functions (in order -- they depend on each other). You may assume that all arrays are arrays of integers, for convenience. When you evaluate time complexity, remember to do each of the following:

Specify which aspect (or aspects) of the input the time complexity depends on. E.g., if a function is O(n), what is n?
Explain thoroughly and clearly why the time complexity is what it is.
Find the worst cases.
Discuss space complexity too: this is usually deemphasized over time complexity, but some interviewers will ask about it.
NB: you can assume that any print statements (console.log, puts, etc.) run in constant time. We'll come back to this near the end, but this is also a safe assumption to make in interviews.

So, what's the time complexity of this function? Remember to find those constant factors as well as the overall time complexity, especially for these simple examples. Partner A, explain this one to Partner B.

## Example 1
```
def add(a, b)
  if a > b
    return a + b
  end

  a - b
end
```

Partner A: Constant for Time and Space complexity `(0(1))`.

## Example 2
```
def print_arr_1(arr)
  arr.each do |idx|
    puts el
  end
end
```
Time O(n) / Space O(1)

## Example 3
```
def print_arr_2(arr)
  arr.each_with_index do |el, idx|
    break if idx == arr.length/2 - 1
    puts el
  end
end
```

Time O(n) / Space O(1)

## Example 4
```
def print_arr_3(arr)
  arr.each do |el|
    break if el == arr.length/2 - 1
    puts el
  end
end
```
Time 0(n) / Space O(1)
O(1) if it breaks first

## Example 5
```
def print_arr_4(arr)
  arr.each do |el|
    break if el == arr.length/2 - 1
    puts el
  end

  arr.each_with_index do |el, idx|
    puts el if idx % 3 == 0
  end

  puts arr.last
end
```
Worst Time O(2n+1) / Best Time O(n+2) / Space O(1)

## Example 6
```
def search(arr, target)
  arr.each_with_index do |el, idx|
    return idx if el == target
  end
end
```
Worst Time O(n) / Best Time O(1) / Space O(1)

## Example 7
```
def searchity_search(arr, target)
  results = []
  arr.each do |el|
    results << search(arr, target + el)
  end

  results  
end
```
Worst Time O(n**2) / Best Time O(n) / Space O(1)

## Example 7
```
def searchity_search_2(arr, target)
  results = []
  arr.each do |el|
    results << search(arr, el)
  end

  results  
end
```
Worst Time O(n**2) / Space O(1)

---------
# Interacting with Iterativeness
Let's leave the arrays behind for a bit, and look at a few other functions. Start with Partner A explaining the time complexity of this one:

## Example 1
```
let iterative_1 = (n, m) => {
  let notes = ["do", "rei", "mi", "fa", "so", "la", "ti", "do"];

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      let position = (i+j) % 8;
      console.log(notes[position]);
    }
  }
}
```
Time O(n**2) / Space O(1)

## Example 2
```
let iterative_2 = (n) => {
  let notes = ["do", "rei", "mi", "fa", "so", "la", "ti", "do"];

  for (var i = 0; i < n; i++) {
    for (var j = i; j >= 0; j--) {
      let position = (i+j) % 8;
      console.log(notes[position]);
    }
  }
}
```
Time O(n**2) / Space O(1)

## Example 3
```
let iterative_3 = (n, m) => {
  let notes = ["do", "rei", "mi", "fa", "so", "la", "ti", "do"];

  let bigger = n > m ? n : m;
  let smaller = n <= m ? n : m;

  for (var i = 0; i < smaller; i++) {
    for (var j = i; j < bigger; j++) {
      let position = (i+j) % 8;
      console.log(notes[position]);
    }
  }
}
```
Time O(n**2) / Space O(1)
---------------
# Radial Recursion

Recursive functions are among the toughest to evaluate for time complexity. Remember FFS:

Find the time complexity of one call, ignoring the recursive calls,
Find the number of times the function is called, and, if necessary, the input sizes on all of those calls.
Sum everything together.
Let's start with something nice and simple. Don't forget to find the constant factor! (As a bonus, figure out a better name for this function than rec_mystery -- what is it doing?)

## Example 4
```
def rec_mystery(n)
  return n if n < 5

  rec_mystery(n - 5)
end
```
Time O(n) / Space O(1)

## Example 5
```
def rec_mystery_2(n)
  return 0 if n == 0

  rec_mystery_2(n/5) + 1
end
```
Time O(logn) / Space O(1)

## Example 6
```
void rec_mystery_3(int n, int m, int o)
{
  if (n <= 0)
  {
    printf("%d, %d\n", m, o);
  }
  else
  {
    rec_mystery_3(n-1, m+1, o);
    rec_mystery_3(n-1, m, o+1);
  }
}
```
Time O(2**n)

## Example 7
```
class Array
  def grab_bag
    return [[]] if empty?
    bag = take(count - 1).grab_bag
    bag.concat(bag.map { |handful| handful + [last] })
  end
end
```
Time O(2**n)
