import { describe, it, expect } from "vitest";
import { ListNode, reverseList, mergeTwoLists } from "./index";

describe("链表算法测试", () => {
  it("反转链表", () => {
    // 创建链表: 1->2->3->4->5
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );

    // 反转链表
    const reversed = reverseList(head);

    // 验证结果: 5->4->3->2->1
    let current = reversed;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }

    expect(values).toEqual([5, 4, 3, 2, 1]);
  });

  it("合并两个有序链表", () => {
    // 创建链表1: 1->3->5
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));

    // 创建链表2: 2->4->6
    const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

    // 合并链表
    const merged = mergeTwoLists(list1, list2);

    // 验证结果: 1->2->3->4->5->6
    let current = merged;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }

    expect(values).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
