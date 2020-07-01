function move_zeros(arrNum, isRight) {
    //Your Code logic should written here
    if (isRight === false) {
        // 0 全部在左边
        // 两个指针 一个找非零数 一个找零

        let zero = arrNum.length, unZero = arrNum.length;
        while (unZero > 0 && zero > 0) {
            if (arrNum[zero] === 0) {
                while (arrNum[unZero] === 0 && unZero > 0) {
                    unZero--;
                }
                [arrNum[zero], arrNum[unZero]] = [arrNum[unZero], arrNum[zero]];
            }
            zero--;
            unZero--;
        }
    } else {
        let zero = 0, unZero = 0;
        while (unZero < arrNum.length && zero < arrNum.length) {
            if (arrNum[zero] === 0) {
                while (arrNum[unZero] === 0 && unZero < arrNum.length - 1) {
                    unZero++;
                }
                [arrNum[zero], arrNum[unZero]] = [arrNum[unZero], arrNum[zero]];
            }
            zero++;
            unZero++;
            console.log(arrNum)
        }
    }
    return arrNum;
}
    const arrNum = [0,0,0,1];
   console.log(move_zeros(arrNum,false)) 