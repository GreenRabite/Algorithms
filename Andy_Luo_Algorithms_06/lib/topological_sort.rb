require_relative 'graph'
require 'set'

# Implementing topological sort using both Khan's and Tarian's algorithms

# Khan's Algorithm
def topological_sort(vertices)
  # Declare variables so we do not mutate the original objects
  all_vertices = vertices
  num_in_edges = {}
  zero_in_edges_nodes = []
  sorted = []
  # Add vertices with no incoming edges
  # to zero_in_edges_nodes queue
  all_vertices.each do |vertex|
    num_in_edges[vertex] = vertex.in_edges.length
    if num_in_edges[vertex] == 0
      zero_in_edges_nodes.unshift(vertex)
    end
  end

  # Iterate through zero_in_edges_nodes until empty
  until zero_in_edges_nodes.empty?
    current = zero_in_edges_nodes.pop
    sorted << current
    all_vertices.delete(current)

    # Remove vertex and corresponding edges
    current.out_edges.each do |edge|
      new_vertex = edge.to_vertex
      num_in_edges[new_vertex] -= 1

      # If removal of vertex leads new_vertex
      # to not have any in_edges, then add
      # new_Vertex to zero_in_edges_nodes
      if num_in_edges[new_vertex] == 0
        zero_in_edges_nodes.unshift(new_vertex)
      end
    end

  end

  # If not all vertices have been reached, we have a cycle
  # so return []
  all_vertices.empty? ? sorted : []
end

# Tarian's Algorithm
# def topological_sort(vertices)
#   order = []
#   explored = Set.new
#
#   vertices.each do |vertex|
#     dfs(vertex, explored, order) unless explored.include?(vertex)
#   end
#
#   order
# end
#
# # Depth First Search - helper function
# def dfs(vertex, explored, order)
#   explored.add(vertex)
#
#   vertex.out_edges.each do |edge|
#     new_vertex = edge.to_vertex
#     dfs(new_vertex, explored, order) unless explored.include?(new_vertex)
#   end
#
#   order.unshift(vertex)
# end
