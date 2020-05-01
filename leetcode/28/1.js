var strStr = function(haystack, needle) {
    if(needle.length == 0){
        return 0;
    }else if(!haystack.includes(needle)){
        return -1;
    }else{
        for(var i = 0; i <= haystack.length - needle.length; i++){
            // console.log(haystack.slice(i, i + needle.length), needle)
            if(haystack.slice(i, i + needle.length) == needle){
                return i;
            }
        }
    }
};
const haystack = "a", needle = "a"
console.log(strStr(haystack, needle))