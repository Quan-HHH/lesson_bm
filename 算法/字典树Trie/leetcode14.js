// var longestCommonPrefix = function(strs) {
    let root = {};
    function insert(str) {
        let currentNode = root;
        for(let c of str) {
            if(!currentNode[c]) {
                currentNode[c] = {};
            }
            currentNode = currentNode[c];
        }
        // 到达最末尾的节点
        if(!'$' in currentNode) {
            currentNode['$'] = 0;
        }
        currentNode['$']++;
        console.log(root)
    }
    insert('flow');
    // insert('flower');
    // insert('flight')

// };
// longestCommonPrefix('12')