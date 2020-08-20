var maxDepth = function (root) {
    if(root === null) return 0;
    return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;    
};