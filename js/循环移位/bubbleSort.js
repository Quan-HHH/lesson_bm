// 从小到大
function sort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    console.log(arr)
}

function swap(arr, left, right) {
    let rightValue = arr[right];
    arr[right] = arr[left];
    arr[left] = rightValue;
}
sort([2,5,1,75,2,6,0,100])