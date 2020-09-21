import React, { forwardRef } from 'react';

let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve('res');
    }, 3000);
})

let status = 'pending'
let res;
function req() {
    p.then((r) => {
        status = 'success'
        res = r;
    },() => {

    })
    if(status === 'pending') {
        throw p;
    } else if(status === 'success') {
        return res;
    }
}

export default forwardRef(function Demo(props, ref) {
    console.log(1111111);
    const res = req();
    return (
        <h2 ref={ref}>{res}</h2>
    )
})