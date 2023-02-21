/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function walk(node: TreeNode | null, prefix: string, sum: { val: number }): void {
    if (!node) return;
    if (!node.left && !node.right) {
        sum.val += Number.parseInt(prefix + node.val);
        return;
    }
    walk(node.left, prefix + node.val.toString(), sum);
    walk(node.right, prefix + node.val.toString(), sum);
}

function sumNumbers(root: TreeNode | null): number {
    const sum = {
        val: 0
    }
    walk(root, '', sum);
    return sum.val;
};