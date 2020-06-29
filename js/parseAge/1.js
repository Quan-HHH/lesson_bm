const parseAge = function(str) {
    if(arguments.length !== 1) {
        console.log('只能传一个参数嗷')
        return;
    } else if(typeof str !== 'string') {
        console.log('参数类型有无嗷');
        return;
    } else {
        return parseInt(str);
    }
}

console.log(parseAge('32',10), typeof parseAge('32'));