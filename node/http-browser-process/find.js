// 'i am good'  找一下字符串里有无 a
function match(s) {
    for(let char of s) {
        if(char == 'a') {
            return true;
        } 
    }
    return false;
}

// 'i am good'  找一下字符串里有无 'ab'
function match1(s) {
    let foundA = false;
    for(let char of s) {
        if(char == 'a') {
            foundA = true;
        } else if(foundA == true && char =='b') {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}

// 'i am good'  找一下字符串里有无 'abc'
function match2(s) {
    let foundA = false, foundB = false;
    for(let char of s) {
        if(char == 'a') {
            foundA = true;
        } else if(foundA == true && char =='b') {
            foundB = true;
        } else if(foundB == true && char =='c') {
            return true;
        } else {
            foundA = false;
            foundB = false;
        }
    }
    return false;
}