import { LinkedList, ListNode } from "./linked_list";

export class StackLl {
  items: LinkedList;
  constructor() {}

  push(item: ListNode): void {
    this.items.prepend(item);
  }

  pop(): ListNode | undefined {
    return this.items.removeFirst();
  }

  peek(): ListNode | undefined {
    return this.items.getHead();
  }
}
