var compareVersion = function(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');
    for(let i = 0; i < (version1.length > version2.length ? version1.length : version2.length ); i++) {
        let a = version1[i] ? version1[i] : '0';
        let b = version2[i] ? version2[i] : '0';
        console.log(a - 0, b - 0)
        if(+a > +b) return 1;
        else if(+a < +b) return -1;
    }
    return 0;
};

console.log(compareVersion('1', '1.1'))