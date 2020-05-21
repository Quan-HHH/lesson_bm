var convert = function(s, numRows) {
    const len = s.length;
    if(numRows == 1) {
        return s;
    }
    let rows = [];
    let down = false;
    let loc = 0;
    for(let i = 0; i < numRows; i++) {
        rows[i] = "";
    }

    for(let i = 0; i < len; i++) {
        rows[loc] += s[i];
        if(loc == numRows - 1 || loc == 0){
            down = !down;
        }
        if(down) {
            loc ++;
        } else {
            loc --;
        }
    }
    let ans = "";
    for(let i = 0; i < numRows; i++) {
        ans += rows[i]
    }
    return ans;
};

convert("LEETCODEISHIRING", 3)