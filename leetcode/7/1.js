// 整数反转
var reverse = function(x) {
    var xx = Math.abs(x)
    if(x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)){
        return 0;
    }else{
        let num = 0;
        while(xx != 0) {
            num = num * 10 + xx % 10;
            xx = parseInt(xx/10);
            // console.log(xx);
        }
        if(num > Math.pow(2, 31) - 1){
            return 0;
        }else if(x >= 0){
            return num;
        }else{
            return -num;
        }
        
    }
    
};

console.log(reverse(1534236469))