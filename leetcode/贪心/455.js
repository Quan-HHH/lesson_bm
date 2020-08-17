var findContentChildren = function(g, s) {
    if(g === [] || s === []) return 0;
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let gi = 0, si = 0;
    while(gi <= g.length && si <= s.length) {
        if(g[gi] <= s[si]) {
            gi++;si++;
        } else si++;
    }
    return gi;
};