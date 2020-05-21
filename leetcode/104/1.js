var maxDepth = function (root) {
    let maxdepth = 0, tempdepth = 0;
    function helper(node,tempdepth) {
        if(!node) {
            maxdepth = Math.max(tempdepth, maxdepth);
            return;
        }
        tempdepth++;
        let temp = tempdepth;
        helper(node.left, temp);
        helper(node.right, temp);
    }
    helper(root,tempdepth);
    return maxdepth;
};