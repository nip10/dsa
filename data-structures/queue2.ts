import { LinkedList, ListNode } from "./linked-list";

export class Queue2 {
  data: LinkedList | undefined;
  constructor() {
    this.data = new LinkedList();
  }
  enqueue(item: ListNode): void {
    this.data?.append(item);
  }
  dequeue(): void {
    this.data?.removeFirst();
  }
  peek(): ListNode["value"] | undefined {
    return this.data?.head?.value;
  }
  size(): number {
    return this.data?.size() ?? 0;
  }
}
