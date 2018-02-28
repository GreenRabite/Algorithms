# Well-formed string
# A string with the characters [,],{,},(,) is said to be well-formed
# if the different types of brackets match in the correct order
# For example, ([]){()} is well formed, but [(]{)} is not
#
# Write a function to test whether a string is well formed

def well_formed_str(str)
  chars_left = []
  lookup = {
    '(' => ')',
    '[' => ']',
    '{' => '}'
  }
  str.split("").each do |el|
    if lookup.keys.include?(el)
      chars_left << el
    elsif chars_left.length == 0 || lookup[chars_left.pop] != el
      return false
    end
  end
  chars_left.empty?
end

p well_formed_str("([]){()}")
p well_formed_str("[(]{)}")
