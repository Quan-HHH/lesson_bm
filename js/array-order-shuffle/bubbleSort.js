let arr = [0, 1, 2, 10, 4, 5, 6, 7, 9, 8, 1];

function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    console.log(arr)
}

bubbleSort(arr)