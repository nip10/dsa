import { describe, expect, it } from "vitest";
import { Queue, QueueItem } from "./queue";

describe("init", () => {
  it("shoud create a queue", () => {
    const queue = new Queue<QueueItem>();
    expect(queue).toBeDefined();
    expect(queue.data).toBeDefined();
  });
});

describe("size", () => {
  it("shoud return correct size", () => {
    const queue = new Queue<QueueItem>();
    const item1 = new QueueItem("foo");
    queue.enqueue(item1);
    const item2 = new QueueItem("bar");
    queue.enqueue(item2);
    // actual test
    const size = queue.size();
    expect(size).toBe(2);
  });
  it("should return 0 if list is empty", () => {
    const queue = new Queue<QueueItem>();
    // actual test
    const size = queue.size();
    expect(size).toBe(0);
  });
});

describe("enqueue", () => {
  it("shoud enqueue an item to an empty queue", () => {
    const queue = new Queue<QueueItem>();
    const item = new QueueItem("foo");
    queue.enqueue(item);
    expect(queue.head).toBe(item);
  });
  it("shoud enqueue an item to an existing queue", () => {
    const queue = new Queue<QueueItem>();
    const item1 = new QueueItem("foo");
    queue.enqueue(item1);
    const item2 = new QueueItem("bar");
    queue.enqueue(item2);
    const item3 = new QueueItem("baz");
    queue.enqueue(item3);
    // actual test
    const newitem = new QueueItem("newitem");
    queue.enqueue(newitem);
    expect(queue.data).toHaveLength(4);
    expect(queue.data[3]).toBe(newitem);
  });
});

describe("dequeue", () => {
  it("shoud dequeue an item", () => {
    const queue = new Queue<QueueItem>();
    const item1 = new QueueItem("foo");
    queue.enqueue(item1);
    const item2 = new QueueItem("bar");
    queue.enqueue(item2);
    const item3 = new QueueItem("baz");
    queue.enqueue(item3);
    // actual test
    queue.dequeue();
    expect(queue.data).toHaveLength(2);
  });
  it("shoud not crash when list is empty", () => {
    const queue = new Queue<QueueItem>();
    queue.dequeue();
    expect(queue.data).toHaveLength(0);
    expect(queue.head).toBeUndefined();
  });
});

describe("peek", () => {
  it("shoud return first item", () => {
    const queue = new Queue<QueueItem>();
    const item1 = new QueueItem("foo");
    queue.enqueue(item1);
    const item2 = new QueueItem("bar");
    queue.enqueue(item2);
    const item3 = new QueueItem("baz");
    queue.enqueue(item3);
    // actual test
    const peekItem = queue.peek();
    expect(peekItem).toBe(item1);
  });
  it("shoud not crash if the queue is empty", () => {
    const queue = new Queue<QueueItem>();
    // actual test
    const peekItem = queue.peek();
    expect(peekItem).toBeUndefined();
  });
});
