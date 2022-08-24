export class ListNode {
  value: string | number;
  next: ListNode | undefined;

  constructor(val: string | number, next?: ListNode) {
    this.value = val;
    this.next = next;
  }
}

export class LinkedList {
  head: ListNode | undefined = undefined;

  constructor(head?: ListNode) {
    this.head = head;
  }

  append(node: ListNode): void {
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  prepend(node: ListNode): void {
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  size(): number {
    let size = 0;
    let curNode = this.head;
    while (curNode) {
      size++;
      curNode = curNode.next;
    }
    return size;
  }

  clear(): void {
    this.head = undefined;
  }

  getHead(): ListNode | undefined {
    return this.head;
  }

  getTail(): ListNode | undefined {
    if (!this.head) return undefined;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    return tail;
  }

  removeFirst(): ListNode | undefined {
    if (!this.head) return;
    this.head = this.head.next;
    return this.head;
  }

  removeLast(): void {
    if (!this.head) return;
    let tail = this.head.next;
    if (!tail) {
      this.head = undefined;
      return;
    }
    let previous = this.head;
    while (tail.next) {
      previous = tail;
      tail = tail.next;
    }
    previous.next = undefined;
  }

  removeAt(idx: number): void {
    let iter = 0;
    let curNode = this.head;
    if (!curNode) return;
    while (curNode.next && iter < idx) {
      if (iter === idx - 1) {
        curNode.next = curNode.next.next;
        return;
      }
      curNode = curNode.next;
      iter++;
    }
  }

  insertAt(idx: number, node: ListNode): void {
    let iter = 0;
    let curNode = this.head;
    if (!curNode) return;
    while (curNode.next && iter < idx) {
      if (iter === idx - 1) {
        node.next = curNode.next;
        curNode.next = node;
        return;
      }
      curNode = curNode.next;
      iter++;
    }
  }

  getAt(idx: number): ListNode | undefined {
    let iter = 0;
    let curNode = this.head;
    if (!curNode) return undefined;
    while (curNode.next && iter <= idx) {
      if (iter === idx) {
        return curNode;
      }
      curNode = curNode.next;
      iter++;
    }
    return undefined;
  }
}
