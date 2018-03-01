# How to build a LRU Cache
# LRU cache is a combination of  Hashed Maps and LinkedLists using the
# best of both worlds. You will have an array of linked lists that
# will periodically kick out from memory the oldest saved value from
# the cache
# To do this you must first understand what a Linkedlist and
#hashed map is. A hashed map is an abstract datastructure that is estenially
# an array of linked lists. The linked lists is another abstract data type that
# hold the actual objects for fast lookup memory
# How this works is that you want to input something into memory. Since this
# was recently seen, this will become the head of the linked list. in terms
# of actually implementing it, it will become the tail of the linked list.
# Now when you want to add something else, the LRU cache checks to see
# if the hash already exist by looking at the hash map. If it does exist,
# it will remove that node in the linked list from whatever spot it was at
# and move it to the most recently seen which is commonly the tail
# Otherwise if it doesnt exist it will shove it to the end of the LinkedList
# Once the length of the linkedlist reach the capcity, the uncached
# version will get hashed and shoved as the tail of the linked  list. the
#element that is not at the head will get 'ejected' (estenially removing it
# self from the linkedlist)
