var isValidBST = function(root) {
    let helper = function(node, lower, upper) {
        if(!node) return true;
        if(node.val >= upper || node.val <= lower) return false;
        return helper(node.right, root.val, upper) && helper(node.left, lower, root.val);
    }
    return helper(root, -Infinity, Infinity)
};