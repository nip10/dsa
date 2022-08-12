import { describe, expect, it } from "vitest";
import { ListNode } from "./linked-list";
import { Queue2 } from "./queue2";

describe("init", () => {
  it("shoud create a queue", () => {
    const queue = new Queue2();
    expect(queue).toBeDefined();
    expect(queue.data).toBeDefined();
  });
});

describe("size", () => {
  it("shoud return correct size", () => {
    const queue = new Queue2();
    const node1 = new ListNode("foo");
    queue.enqueue(node1);
    const node2 = new ListNode("bar");
    queue.enqueue(node2);
    // actual test
    const size = queue.size();
    expect(size).toBe(2);
  });
  it("should return 0 if list is empty", () => {
    const queue = new Queue2();
    // actual test
    const size = queue.size();
    expect(size).toBe(0);
  });
});

describe("enqueue", () => {
  it("shoud enqueue an item to an empty queue", () => {
    const queue = new Queue2();
    const node = new ListNode("foo");
    queue.enqueue(node);
    expect(queue.data?.head).toBe(node);
  });
  it("shoud enqueue an item to an existing queue", () => {
    const queue = new Queue2();
    const node1 = new ListNode("foo");
    queue.enqueue(node1);
    const node2 = new ListNode("bar");
    queue.enqueue(node2);
    const node3 = new ListNode("baz");
    queue.enqueue(node3);
    // actual test
    const newNode = new ListNode("newNode");
    queue.enqueue(newNode);
    expect(queue.data?.head?.next?.next?.next).toBe(newNode);
  });
});

describe("dequeue", () => {
  it("shoud dequeue an item", () => {
    const queue = new Queue2();
    const node1 = new ListNode("foo");
    queue.enqueue(node1);
    const node2 = new ListNode("bar");
    queue.enqueue(node2);
    const node3 = new ListNode("baz");
    queue.enqueue(node3);
    // actual test
    queue.dequeue();
    expect(queue.data?.head?.next?.next).toBeUndefined();
  });
  it("shoud not crash when list is empty", () => {
    const queue = new Queue2();
    queue.dequeue();
    expect(queue.data?.head).toBeUndefined();
  });
});

describe("peek", () => {
  it("shoud return first item", () => {
    const queue = new Queue2();
    const node1 = new ListNode("foo");
    queue.enqueue(node1);
    const node2 = new ListNode("bar");
    queue.enqueue(node2);
    const node3 = new ListNode("baz");
    queue.enqueue(node3);
    // actual test
    const peekItem = queue.peek();
    expect(peekItem).toBe(node1.value);
  });
  it("shoud not crash if the queue is empty", () => {
    const queue = new Queue2();
    // actual test
    const peekItem = queue.peek();
    expect(peekItem).toBeUndefined();
  });
});
