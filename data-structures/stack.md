# Stack

In computer science, a **stack** is an abstract data type that serves
as a collection of elements, with two principal operations:

- **push**, which adds an element to the collection, and
- **pop**, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its
alternative name, LIFO (last in, first out). Additionally, a
peek operation may give access to the top without modifying
the stack. The name "stack" for this type of structure comes
from the analogy to a set of physical items stacked on top of
each other, which makes it easy to take an item off the top
of the stack, while getting to an item deeper in the stack
may require taking off multiple other items first.

Simple representation of a stack runtime with push and pop operations.

![Stack](./data-structures/images/stack.jpeg)

## Different implementations:

- Arrays - The worst solution, using array.shift() on a large array is very inefficient.
- Linked lists - It's O(1) but using an object for each element is a bit excessive, especially if there are a lot of them and they are small, like storing numbers.
- Delayed shift arrays - It consists of associating an index with the array. When an element is dequeued, the index moves forward. When the index reaches the middle of the array, the array is sliced in two to remove the first half.

## References

- [Trekhleb](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack/README.md)
- [Wikipedia](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>)
- [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)
