function quickSort(array) {
    if (array.length <= 1) return array;
    const pivot = array.shift();
    let left = [];
    let right = [];
    array.forEach( el=> {
        if (el < pivot) {
            left.push(el);
        } else {
            right.push(el);
        }
    })
    left = quickSort(left);
    right = quickSort(right);
    return left.concat([pivot]).concat(right);
}


module.exports = {
    quickSort
};