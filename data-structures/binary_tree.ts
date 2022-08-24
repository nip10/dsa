export class Node<T> {
  value: T;
  parent?: Node<T>;
  left?: Node<T>;
  right?: Node<T>;
  constructor(value: T, left?: Node<T>, right?: Node<T>, parent?: Node<T>) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

export class BinaryTree<T> {
  root: Node<T>;

  constructor(rootNode: Node<T>) {
    this.root = rootNode;
  }

  // Insert a node as a child of the given parent node
  insert(nodeToInsert: Node<T>, parent?: Node<T>) {}
  // Remove a node and its children from the binary tree
  remove() {}
  // Retrieve a given node
  find() {}
  // Traverses the binary tree by recursively traversing each node followed by its children
  preOrderTraversal() {}
  // Traverses the binary tree by recursively traversing each node's children followed by the node
  postOrderTraversal() {}
  // Traverses the binary tree by recursively traversing each node's left child, followed by the node, followed by its right child
  inOrderTraversal() {}
}
