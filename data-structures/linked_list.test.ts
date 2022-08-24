import { describe, expect, it } from "vitest";
import { LinkedList, ListNode } from "./linked_list";

describe("init", () => {
  it("shoud create a node", () => {
    const node = new ListNode("foo");
    expect(node.value).toBe("foo");
  });

  it("shoud create a list with a single node", () => {
    const node = new ListNode("foo");
    const list = new LinkedList(node);
    expect(list.head).toBe(node);
  });

  it("shoud create a list with a multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    expect(list.head).toBe(node1);
    expect(list.head!.next).toBe(node2);
    expect(list.head!.next!.next).toBe(node3);
  });
});

describe("append", () => {
  it("shoud append to list", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);

    const node = new ListNode("newnode");
    list.append(node);
    expect(list.head?.next?.next?.next).toBe(node);
  });

  it("shoud append to empty list", () => {
    const list = new LinkedList();
    const node = new ListNode("newnode");
    list.append(node);
    expect(list.head).toBe(node);
  });
});

describe("prepend", () => {
  it("shoud prepend to list", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);

    const node = new ListNode("newnode");
    list.prepend(node);
    expect(list.head).toBe(node);
    expect(list.head?.next).toBe(node1);
  });

  it("shoud prepend to empty list", () => {
    const list = new LinkedList();
    const node = new ListNode("newnode");
    list.prepend(node);
    expect(list.head).toBe(node);
  });
});

describe("size", () => {
  it("shoud return 0 on empty list", () => {
    const list = new LinkedList();
    const size = list.size();
    expect(size).toBe(0);
  });

  it("shoud return size on list with multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    const size = list.size();
    expect(size).toBe(3);
  });
});

describe("clear", () => {
  it("should work on empty list", () => {
    const list = new LinkedList();
    list.clear();
    expect(list.head).toBeUndefined();
  });

  it("should work on list with multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    list.clear();
    expect(list.head).toBeUndefined();
  });
});

describe("get head", () => {
  it("should return undefined when list is empty", () => {
    const list = new LinkedList();
    const head = list.getHead();
    expect(head).toBeUndefined();
  });

  it("should return head element on list with multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    const head = list.getHead();
    expect(head).toBe(node1);
  });
});

describe("get tail", () => {
  it("should return undefined when list is empty", () => {
    const list = new LinkedList();
    const tail = list.getTail();
    expect(tail).toBeUndefined();
  });

  it("should return tail element on list with multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    const tail = list.getTail();
    expect(tail).toBe(node3);
  });
});

describe("remove first", () => {
  it("should not crash when list is empty", () => {
    const list = new LinkedList();
    list.removeFirst();
    expect(list.head).toBeUndefined();
  });

  it("should remove first element on list with multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    list.removeFirst();
    expect(list.head).toBe(node2);
  });
});

describe("remove last", () => {
  it("should not crash when list is empty", () => {
    const list = new LinkedList();
    list.removeFirst();
    expect(list.head).toBeUndefined();
  });

  it("should remove last element on list with one node", () => {
    const node = new ListNode("foo");
    const list = new LinkedList(node);
    list.removeLast();
    expect(list.head?.next).toBeUndefined();
  });

  it("should remove last element on list with multiple nodes", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    list.removeLast();
    expect(list.head?.next?.next).toBeUndefined();
  });
});

describe("remove at", () => {
  it("should not crash when index is negative", () => {
    const list = new LinkedList();
    list.removeAt(-23);
    expect(list.head).toBeUndefined();
  });

  it("should not crash when index is greater than list size", () => {
    const node = new ListNode("foo");
    const list = new LinkedList(node);
    list.removeAt(23);
    expect(list.head).toBe(node);
  });

  it("should remove element on specified index", () => {
    const node4 = new ListNode("baz");
    const node3 = new ListNode("qqq", node4);
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);
    list.removeAt(1);
    expect(list.head?.next).toBe(node3);
  });
});

describe("insert at", () => {
  it("should not crash when index is negative", () => {
    const list = new LinkedList();
    const node = new ListNode("newnode");
    list.insertAt(-23, node);
    expect(list.head).toBeUndefined();
  });

  it("should not crash when index is greater than list size", () => {
    const list = new LinkedList();
    const node = new ListNode("newnode");
    list.insertAt(23, node);
    expect(list.head).toBeUndefined();
  });

  it("should insert element on specified index", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);

    const newNode = new ListNode("newnode");
    list.insertAt(1, newNode);
    expect(list.head?.next).toBe(newNode);
    expect(list.head?.next?.next).toBe(node2);
  });
});

describe("get at", () => {
  it("should not crash when index is negative", () => {
    const list = new LinkedList();
    const node = list.getAt(-23);
    expect(node).toBeUndefined();
  });

  it("should not crash when index is greater than list size", () => {
    const list = new LinkedList();
    const node = list.getAt(23);
    expect(node).toBeUndefined();
  });

  it("should return node", () => {
    const node3 = new ListNode("baz");
    const node2 = new ListNode("bar", node3);
    const node1 = new ListNode("foo", node2);
    const list = new LinkedList(node1);

    const node = list.getAt(1);
    expect(node).toBe(node2);
  });
});
