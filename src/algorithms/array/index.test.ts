import { describe, it, expect } from "vitest";
import { twoSum, removeElement } from "./index";

describe("数组算法测试", () => {
  it("两数之和", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("移除元素", () => {
    const nums1 = [3, 2, 2, 3];
    const k1 = removeElement(nums1, 3);
    expect(k1).toBe(2);
    expect(nums1.slice(0, k1).sort()).toEqual([2, 2]);

    const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
    const k2 = removeElement(nums2, 2);
    expect(k2).toBe(5);
    expect(nums2.slice(0, k2).sort()).toEqual([0, 0, 1, 3, 4]);
  });
});
