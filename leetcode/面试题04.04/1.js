// 检查平衡性
// 递归获取左右子树的深度 大于1就返回false
var isBalanced = function (root) {
    let isBal = true;
    function helper(node) {
        if (!node) {
            return 0;
        }
        let left = helper(node.left);
        let right = helper(node.right);
        if (Math.abs(left - right) > 1) {
            isBal = false;
        }
        return Math.max(left, right) + 1;
    }
    helper(root);
    return isBal;
};