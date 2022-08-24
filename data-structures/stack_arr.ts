export class StackArr<T> {
  items: T[];
  constructor() {}

  push(item: T): void {
    this.items = [item, ...this.items];
  }

  pop(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }
}
