
def kth_largest(node, k)
  kth_node = { length: 0, node: nil }
  in_order_reverse(node, kth_node, k)[:node]
end

def in_order_reverse(node, kth_node, k)
  if node && kth_node[:length] < k
    kth_node = in_order_reverse(node.right, kth_node, k)
    if kth_node[:length] < k
      kth_node[:length] += 1
      kth_node[:node] = node
    end

    if kth_node[:length] < k
      kth_node = in_order_reverse(node.left, kth_node, k)
    end
  end

  kth_node
end
