function productFib(prod){
    // ...
    let arr = [0, 1], i = 0;
    while(arr[i] * arr[i + 1] < prod) {
        arr.push(arr[i] + arr[++i]);
        console.log(arr)
    } 
    return [arr[i], arr[i + 1], arr[i] * arr[i + 1] === prod]
}
console.log(productFib(5895))