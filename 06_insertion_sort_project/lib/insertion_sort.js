function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        for (var j = i - 1; 0 <= j && current < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    } 
    return arr;
}

module.exports = {
    insertionSort
};