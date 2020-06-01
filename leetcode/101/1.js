// 对称二叉树
var isSymmetric = function(root) {
    function helper(left, right) {
        if(!left && !right) return true;
        if(right && left) {
            return (right.val == left.val) && (helper(left.right == right.left)) && (helper(left.left == right.right));
        }
        return false;
    }
    if(!root) return true;
    return helper(root.left, root.right);
};