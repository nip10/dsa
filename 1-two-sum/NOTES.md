The first solution is O(n2).
The inner loop doesnt have to scan the entire array because a+b=b+a
​
The second solution is O(n).
We loop for the complement and stop if found.
TODO: Check why hasOwnProperty is not a loop (which would make this O(n2) like above.