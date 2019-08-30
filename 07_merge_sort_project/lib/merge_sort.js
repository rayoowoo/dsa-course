function merge(array1, array2) {
    const merged = [];

    while (array1.length && array2.length) {
        const item1 = array1[0];
        const item2 = array2[0];

        if (item1 < item2) {
            merged.push(array1.shift());
        } else {
            merged.push(array2.shift());
        }
    }
    return merged.concat(array1.concat(array2))
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const middle = Math.round(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));
    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};