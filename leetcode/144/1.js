// 二叉树的前序遍历
var preorderTraversal = function(root) {
    let arr = [];
    function helper(node) {
        if(node) {
            let val = node.val;
            arr.push(val)
            helper(node.left);
            helper(node.right);
        }
    }    
    helper(root)
};