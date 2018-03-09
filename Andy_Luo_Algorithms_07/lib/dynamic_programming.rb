class DynamicProgramming

  def initialize
    @blair_cache = {
      1 => 1,
      2 => 2
     }

     @frog_cache = {
       1 => [[1]],
       2 => [[1, 1], [2]],
       3 => [[1, 1, 1], [1, 2], [2, 1], [3]]
     }
  end

  def blair_nums(n)
    #Recursive Solution
    # O(n**2) time complexitity
    # return 1 if n == 1
    # return 2 if n == 2
    # # Relation of n-1_odd_num is 2 * n -3 when graphed
    # n_minus_1_odd_num = 2 * n -3
    # blair_nums(n-1) + blair_nums(n-2) + (2*n-3)

    #Dynammic Programming Solution (Top Down)
    # O(n) time complexitity
    # return @blair_cache[n] if @blair_cache[n]
    # n_minus_1_odd_num = 2 * n -3
    # @blair_cache[n] = blair_nums(n-2) + blair_nums(n-1) + n_minus_1_odd_num
    # @blair_cache[n]

    #Dynammic Programming Solution (Bottom Up)
    blair_cache= {1 => 1, 2 => 2}
    (3..n).each do |k|
      blair_cache[k] = blair_cache[k-1] + blair_cache[k-2] + (2 * k -3)
    end
    blair_cache[n]
  end

  def frog_hops_bottom_up(n)
    frog_cache = frog_cache_builder(n)
    # p frog_cache
    frog_cache[n]
  end

  def frog_cache_builder(n)
    frog_cache = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[1,1,1], [1,2], [2,1],[3]]
    }
    return frog_cache if n <= 3

    (4..n).each do |op|
      current_hop_arr = []
      #All permuations of hops when you need one more hop
      frog_cache[op-1].each do |hop|
        current_hop_arr << (hop.dup << 1)
      end
      #All permuations of hops when you need two more hops
      frog_cache[op-2].each do |hop|
        current_hop_arr << (hop.dup << 2)
      end
      #All permuations of hops when you need three more hops
      frog_cache[op-3].each do |hop|
        current_hop_arr << (hop.dup << 3)
      end
      frog_cache[op] = current_hop_arr
    end
    frog_cache
  end

  def frog_hops_top_down(n)
    #Recursive Solution
    # return [[1]] if n == 1
    # return [[1,1],[2]] if n == 2
    # return [[1,1,1],[1,2],[2,1],[3]] if n == 3
    # last_step = frog_hops_top_down(n-1).map {|arr| arr.dup << 1}
    # two_steps = frog_hops_top_down(n-2).map {|arr| arr.dup << 2}
    # three_steps = frog_hops_top_down(n-3).map {|arr| arr.dup << 3}
    # last_step + two_steps + three_steps

    # Top Downs Solution
    frog_hops_top_down_helper(n)
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n]
    last_step = frog_hops_top_down(n-1).map {|arr| arr.dup << 1}
    two_steps = frog_hops_top_down(n-2).map {|arr| arr.dup << 2}
    three_steps = frog_hops_top_down(n-3).map {|arr| arr.dup << 3}
    @frog_cache[n] = last_step + two_steps + three_steps
    @frog_cache[n]
  end

  def super_frog_hops(n, k)
    super_cache = super_frog_cache_builder(n, k)
    super_cache[n]
  end

  def super_frog_cache_builder(n, k)
    super_frog_cache = {
      1 => [[1]]
    }

    (2..n).each do |step|
      super_frog_cache[step] = []
      # Frog jumps as many steps it needs to take to finish
      (1..[k,step - 1].min).each do |hop|
        super_frog_cache[step] += super_frog_cache[step - hop].map{|hops| hops + [hop]}
      end
      super_frog_cache[step] += [[step]] if step <= k
    end

    super_frog_cache
  end

  def knapsack(weights, values, capacity)
    return 0 if weights.empty? || values.empty? || capacity == 0
    solution_table = knapsack_table(weights,values,capacity)
    max_capacity = solution_table.last.last
  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)
    soln = Array.new(capacity + 1) { [] }

    (0..capacity).each do |cap|
      values.length.times do |idx|
        if cap.zero?
          soln[cap][idx] = 0
        elsif idx.zero?
          soln[cap][idx] = weights[0] > cap ? 0 : values[0]
        else
          previous_soln_at_cap =
            soln[cap][idx - 1]
          previous_soln_and_this_item =
            weights[idx] > cap ? 0 : soln[cap - weights[idx]][idx - 1] + values[idx]
          soln[cap][idx] = [previous_soln_at_cap, previous_soln_and_this_item].max
        end
      end
    end

    soln
  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
