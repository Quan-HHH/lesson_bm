var invertTree = function(root) {
    function helper(node) {
        if(node.right) {
            [node.left, node.right] = [node.right, node.left];
            helper(node.left);
            helper(node.right)
        }
    }
    helper(root)
    return root;
};