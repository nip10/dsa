export class QueueItem {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

export class Queue<T> {
  data: T[] = [];
  head: T | undefined;
  constructor() {}
  enqueue(item: T): void {
    if (this.data.length === 0) {
      this.head = item;
    }
    this.data.push(item);
  }
  dequeue(): void {
    const prevHead = this.data.shift();
    if (prevHead) {
      this.head = this.data[0];
    }
  }
  size(): number {
    return this.data.length;
  }
  peek(): T | undefined {
    return this.head;
  }
}
